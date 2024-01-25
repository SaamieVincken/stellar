import * as THREE from 'three';

let scene, camera, renderer, particles, light, rendererContainer;
let numParticles = 2000; // Initial number of particles
let particleTexture;

export function createExplosionScene() {
    numParticles = 2000;
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

    const particleGeometry = new THREE.BufferGeometry();

    // Load an image texture using TextureLoader
    const textureLoader = new THREE.TextureLoader();
    particleTexture = textureLoader.load('src/lib/images/Lava.jpg');

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.03,
        map: particleTexture,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
    });

    const positions = [];
    const sphereGeometry = new THREE.SphereGeometry(1.39);

    function createParticles() {
        for (let i = 0; i < numParticles; i++) {
            const randomPoint = new THREE.Vector3(
                Math.random() * 2 - 1,
                Math.random() * 2 - 1,
                Math.random() * 2 - 1
            ).normalize();

            positions.push(
                randomPoint.x * sphereGeometry.parameters.radius,
                randomPoint.y * sphereGeometry.parameters.radius,
                randomPoint.z * sphereGeometry.parameters.radius
            );
        }
        particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    }

    createParticles();

    particles = new THREE.Points(particleGeometry, particleMaterial);
    particles.position.y = 0.5;
    scene.add(particles);

    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 7);
    scene.add(light);

    function animate() {
        if (particles !== null && particles !== undefined) {
            particles.rotation.x += 0.0015;
            particles.rotation.y += 0.0015;

            if (numParticles < 20000) {
                numParticles += 500;
                positions.length = 0;
                createParticles();
                particles.geometry.attributes.position.needsUpdate = true;
            }

            if (rendererContainer) {
                camera.aspect = rendererContainer.clientWidth / rendererContainer.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(rendererContainer.clientWidth, rendererContainer.clientHeight);
            }
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
    }
    animate();
}

export function disposeExplosionScene() {
    // Dispose of particles
    if (particles !== null && particles !== undefined) {
        if (particles.geometry !== null && particles.geometry !== undefined) {
            particles.geometry.dispose();
        }
        if (particles.material !== null && particles.material !== undefined) {
            particles.material.dispose();
        }
        scene.remove(particles);
        particles = null;
    }

    // Dispose of texture (if used)
    if (particleTexture !== null && particleTexture !== undefined) {
        particleTexture.dispose();
        particleTexture = null;
    }

    // Dispose of light
    if (light !== null && light !== undefined) {
        scene.remove(light);
        light = null;
    }

    // Dispose of the scene itself
    if (scene !== null && scene !== undefined) {
        scene = null;


        // Dispose of the renderer
        if (renderer !== null && renderer !== undefined) {
            if (rendererContainer && renderer.domElement !== null && renderer.domElement !== undefined) {
                rendererContainer.removeChild(renderer.domElement);
            }
            renderer.forceContextLoss();
            renderer.domElement = null;
            renderer = null;
        }

        camera = null;
        rendererContainer = null;
    }
}
