import * as THREE from 'three';

let scene, camera, renderer, globe, light, rendererContainer;
let uniforms;

export function initializeStar() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererContainer = document.getElementById('renderer-container');
    if (rendererContainer) {
        rendererContainer.appendChild(renderer.domElement);
    }

    const geometry = new THREE.SphereGeometry(1.6);

    const textureLoader = new THREE.TextureLoader();
    const cloudTexture = textureLoader.load('src/lib/images/cloud.png');
    const lavaTexture = textureLoader.load('src/lib/images/lavatile.jpg');

    lavaTexture.colorSpace = THREE.SRGBColorSpace;
    cloudTexture.wrapS = cloudTexture.wrapT = THREE.RepeatWrapping;
    lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;

    uniforms = {
        'fogDensity': { value: 0.45 },
        'fogColor': { value: new THREE.Vector3(0, 0, 0) },
        'time': { value: 1.0 },
        'uvScale': { value: new THREE.Vector2(3.0, 1.0) },
        'texture2': { value: lavaTexture },
        'starColor': { value: new THREE.Color(0xD8BFD8) },
    };

    const vertexShader = `
        uniform vec2 uvScale;
        varying vec2 vUv;
        void main() {
            vUv = uvScale * uv;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    const fragmentShader = `
    uniform float time;
    uniform float fogDensity;
    uniform vec3 fogColor;
    uniform vec3 starColor; 
    
    uniform sampler2D texture1;
    uniform sampler2D texture2;
    
    varying vec2 vUv;
    
    void main( void ) {
    
    vec2 position = - 1.0 + 2.0 * vUv;
    
    vec4 noise = texture2D( texture1, vUv );
    vec2 T1 = vUv + vec2( 1.5, - 1.5 ) * time * 0.02;
    vec2 T2 = vUv + vec2( - 0.5, 2.0 ) * time * 0.01;
    
    T1.x += noise.x * 2.0;
    T1.y += noise.y * 2.0;
    T2.x -= noise.y * 0.2;
    T2.y += noise.z * 0.2;
    
    float p = texture2D( texture1, T1 * 1.0 ).a;
    
    vec4 color = texture2D( texture2, T2 * 2.0 );
    vec4 lavaColor = color * ( vec4( p, p, p, p ) * 1.5 ) + ( color * color - 0.05 );
    
    vec4 baseColor = mix(lavaColor, vec4(starColor, 1.0), 0.1 + 0.4 * p); 
    
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    const float LOG2 = 1.442695;
    float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );
    fogFactor = 0.7 - clamp( fogFactor, 0.0, 0.4 );

    vec4 finalColor = mix( baseColor, vec4( fogColor, baseColor.w ), fogFactor );

    finalColor.rgb *= 1.7; 

    gl_FragColor = finalColor;
    
    }
`;


    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true,
    });

    globe = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(globe);

    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 7);
    scene.add(light);

    function animate() {
        uniforms['time'].value += 0.02;
        globe.rotation.x += 0.0015;
        globe.rotation.y += 0.0015;

        if (rendererContainer) {
            camera.aspect = rendererContainer.clientWidth / rendererContainer.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(rendererContainer.clientWidth, rendererContainer.clientHeight);
        }
        renderer.render(scene, camera);

        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', onWindowResize);
}

export function updateStar(hslColor, radius, luminosityClass) {
    if (!globe || !light) {
        console.warn('Star has not been initialized. Call initializeStar first.');
        return;
    }

    uniforms['starColor'].value = hslColor !== undefined ? new THREE.Color().setHSL(hslColor[0] / 360, hslColor[1] / 100, hslColor[2] / 100) : uniforms['starColor'].value; // Update the uniform instead of the material color

    const finalRadius = radius !== undefined ? radius : globe.geometry.parameters.radius;
    const finalLuminosity = luminosityClass !== undefined ? luminosityClass : light.intensity;

    // Update the geometry and light intensity as before
    globe.geometry = new THREE.SphereGeometry(finalRadius);
    light.intensity = finalLuminosity;
}


function onWindowResize() {
    if (camera && renderer && rendererContainer) {
        camera.aspect = rendererContainer.clientWidth / rendererContainer.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(rendererContainer.clientWidth, rendererContainer.clientHeight);
    }
}
export function disposeStar() {
    // Remove event listeners
    window.removeEventListener('resize', onWindowResize);

    // Dispose of geometries, materials, and textures
    if (globe) {
        // Dispose of shader material
        if (globe.material) {
            globe.material.dispose();
        }

        // Dispose of geometry
        if (globe.geometry) {
            globe.geometry.dispose();
        }

        // Remove from scene
        scene.remove(globe);
    }

    // Dispose of texture resources if needed
    if (uniforms['texture1'].value) {
        uniforms['texture1'].value.dispose();
    }
    if (uniforms['texture2'].value) {
        uniforms['texture2'].value.dispose();
    }

    // Clear references
    globe = null;
    uniforms = null;

    // Clear the scene
    scene = null;

    // Clear the renderer
    if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement = null;
        renderer = null;
    }
}
