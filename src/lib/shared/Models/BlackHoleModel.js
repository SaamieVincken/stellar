import * as THREE from 'three';

export function initializeBlackHole() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    let renderer = new THREE.WebGLRenderer({ alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let rendererContainer = document.getElementById('renderer-container');
    if (rendererContainer) {
        rendererContainer.appendChild(renderer.domElement);
    } else {
        document.body.appendChild(renderer.domElement);
    }
    let geometry = new THREE.SphereGeometry(4);
    let material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    let blackHole = new THREE.Mesh(geometry, material);
    blackHole.position.z = -2;
    scene.add(blackHole);


    const glowGeometry = new THREE.SphereGeometry(4.35); // Slightly larger than the black hole
    const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
            glowColor: { type: 'c', value: new THREE.Color(0xff4500) }, // Adjusted to a more fiery orange-red color
            viewVector: { type: 'v3', value: camera.position },
            c: { type: "f", value: 0.3 }, // Adjust these values
            p: { type: "f", value: 10.5 }, // to control the glow intensity and falloff
            noiseTexture: { type: 't', value: new THREE.TextureLoader().load('src/lib/images/supernovaMaterial2.jpg') }, // Path to a noise texture
            time: { type: 'f', value: 0.5 } // Time for animation
        },
        vertexShader: `
        uniform vec3 viewVector;
        uniform float c;
        uniform float p;
        varying float intensity;
        void main() {
            vec3 vNormal = normalize(normalMatrix * normal);
            vec3 vNormel = normalize(normalMatrix * viewVector);
            intensity = pow(c - dot(vNormal, vNormel), p);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
        fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
            vec3 glow = glowColor * intensity;
            gl_FragColor = vec4(glow, 1.0);
        }
    `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false
    });
    let glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);

    blackHole.add(glowMesh);


    camera.position.z = 20;
    blackHole.position.y = 0;
    function animate() {
        requestAnimationFrame(animate);

        blackHole.rotation.x += 0.05;
        blackHole.rotation.y += 0.07;

        renderer.render(scene, camera);
    }
    animate();

    function onWindowResize() {
        const newWidth = window.innerWidth;
        const newHeight =500;

        // Update the camera's aspect ratio
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        // Update the renderer's size
        renderer.setSize(newWidth, newHeight);
    }

// Call onWindowResize() initially and whenever the window is resized
    window.addEventListener('resize', onWindowResize);
}
