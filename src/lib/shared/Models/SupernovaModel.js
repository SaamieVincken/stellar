import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';

let scene, camera, renderer, rendererContainer, mesh;

export function initializeSupernova() {
    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1.5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(3000, window.innerHeight);
    rendererContainer = document.getElementById('renderer-container');
    if (rendererContainer) {
        rendererContainer.appendChild(renderer.domElement);
    } else {
        document.body.appendChild(renderer.domElement);
    }
    const supernovaTexture = new THREE.TextureLoader().load('src/lib/images/nasa-rTZW4f02zY8-unsplash.jpg' );
    const secondTexture = new THREE.TextureLoader().load('src/lib/images/nasa-rTZW4f02zY8-unsplash.jpg');

    // Cloud texture setup
    const size = 120;
    const data = new Uint8Array(size * size * size);
    let i = 0;
    const scale = 0.05;
    const perlin = new ImprovedNoise();
    const vector = new THREE.Vector3();

    for (let z = 0; z < size; z++) {
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const d = 1.0 - vector.set(x, y, z).subScalar(size / 2).divideScalar(size).length();
                data[i] = (128 + 128 * perlin.noise(x * scale / 1.5, y * scale, z * scale / 1.5)) * d * d;
                i++;
            }
        }
    }

    const texture = new THREE.Data3DTexture(data, size, size, size);
    texture.format = THREE.RedFormat;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.unpackAlignment = 1;
    texture.needsUpdate = true;

    // Cloud material setup
    const vertexShader = /* glsl */`
        in vec3 position;

        uniform mat4 modelMatrix;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform vec3 cameraPos;

        out vec3 vOrigin;
        out vec3 vDirection;

        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

            vOrigin = vec3(inverse(modelMatrix) * vec4(cameraPos, 1.0)).xyz;
            vDirection = position - vOrigin;

            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    const fragmentShader = /* glsl */`
    precision highp float;
    precision highp sampler3D;
    precision highp sampler2D;

    uniform sampler2D supernovaTexture;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    in vec3 vOrigin;
    in vec3 vDirection;

    out vec4 color;

    uniform sampler3D map;
    uniform float threshold;
    uniform float range;
    uniform float opacity;
    uniform float steps;
    uniform float frame;

    uint wang_hash(uint seed) {
        seed = (seed ^ 61u) ^ (seed >> 16u);
        seed *= 9u;
        seed = seed ^ (seed >> 4u);
        seed *= 0x27d4eb2du;
        seed = seed ^ (seed >> 15u);
        return seed;
    }

    float randomFloat(inout uint seed) {
        return float(wang_hash(seed)) / 4294967296.;
    }

    vec2 hitBox(vec3 orig, vec3 dir) {
        const vec3 box_min = vec3(-0.5);
        const vec3 box_max = vec3(0.5);
        vec3 inv_dir = 1.0 / dir;
        vec3 tmin_tmp = (box_min - orig) * inv_dir;
        vec3 tmax_tmp = (box_max - orig) * inv_dir;
        vec3 tmin = min(tmin_tmp, tmax_tmp);
        vec3 tmax = max(tmin_tmp, tmax_tmp);
        float t0 = max(tmin.x, max(tmin.y, tmin.z));
        float t1 = min(tmax.x, min(tmax.y, tmax.z));
        return vec2(t0, t1);
    }

    float sample1(vec3 p) {
        return texture(map, p).r;
    }

    float shading(vec3 coord) {
        float step = 0.01;
        return sample1(coord + vec3(-step)) - sample1(coord + vec3(step));
    }

    vec4 linearToSRGB(in vec4 value) {
        return vec4(mix(pow(value.rgb, vec3(1.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.a);
    }

    void main() {
        vec3 rayDir = normalize(vDirection);
        vec2 bounds = hitBox(vOrigin, rayDir);

        if (bounds.x > bounds.y) discard;

        bounds.x = max(bounds.x, 0.0);

        vec3 p = vOrigin + bounds.x * rayDir;
        vec3 inc = 0.015 / abs(rayDir);
        float delta = min(inc.x, min(inc.y, inc.z));
        delta /= steps;

        uint seed = uint(gl_FragCoord.x) * uint(1973) + uint(gl_FragCoord.y) * uint(9277) + uint(frame) * uint(26699);
        vec3 size = vec3(textureSize(map, 0));
        float randNum = randomFloat(seed) * 2.0 - 1.0;
        p += rayDir * randNum * (7.0 / size);

        vec4 ac = vec4(-1.0);

        for (float t = bounds.x; t < bounds.y; t += delta) {
            float d = sample1(p + 0.5);
            d = smoothstep(threshold - range, threshold + range, d) * opacity;

            vec2 uv = p.xy * 1.0 + 0.5;
            vec4 texColor = texture(supernovaTexture, uv);

            // Apply the texture color directly
            ac.rgb = texColor.rgb * 0.9;
            ac.a += (1.0 - ac.a) * d;

            if (ac.a >= 0.95) break;

            p += rayDir * delta;
        }
  if (ac.a < 0.01) discard;
        color = linearToSRGB(ac);
    }
`;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.RawShaderMaterial({
        glslVersion: THREE.GLSL3,
        uniforms: {
            supernovaTexture: { value: supernovaTexture },
            secondTexture: { value: secondTexture },
            base: { value: new THREE.Color(0x798aa0) },
            map: { value: texture },
            cameraPos: { value: new THREE.Vector3() },
            threshold: { value: 0.25 },
            opacity: { value: 1 },
            range: { value: 0.1 },
            steps: { value: 10 },
            frame: { value: 0 },
        },
        vertexShader,
        fragmentShader,
        side: THREE.BackSide,
    });

    mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 0.2;
    scene.add(mesh);

    // Window resize handler
    window.addEventListener('resize', onWindowResize);

    render();
}

function render() {
    requestAnimationFrame(render);
    mesh.material.uniforms.cameraPos.value.copy(camera.position);
    mesh.rotation.y = - performance.now() / 50000;
    mesh.material.uniforms.frame.value++;
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(scene, camera);
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}