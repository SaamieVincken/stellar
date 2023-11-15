import * as THREE from 'three';
import { Plane } from 'three'; // Import Plane class

let scene, backgroundScene, camera, renderer, globe, controls, light, dragControls;
let rotationSpeed = 0.001; // Initial rotation speed

export function initializeRedGiant() {
    // Custom canvas dimensions
    const canvasWidth = 400;
    const canvasHeight = 300;

    // Create scene
    scene = new THREE.Scene();

    // Create a separate scene for the background
    backgroundScene = new THREE.Scene();

    // Create camera
    camera = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 1, 1000);
    camera.position.z = 5;

    // Create renderer with a transparent background and shadows
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasWidth, canvasHeight);
    // Set CSS style to make the renderer centered within the container
    const rendererContainer = document.getElementById('renderer-container');
    rendererContainer.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('src/lib/images/Lava.jpg');

    const sphereRadius = 2.8; // Adjust the radius as needed
    const geometry = new THREE.SphereGeometry(sphereRadius, 64, 32); // Adjust the parameters as needed
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
        roughness: 0.5,
        metalness: 0.5,
    });

    const glowMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0xff6600,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.08,
        receiveShadow: true,
    });

    const glowSphere = new THREE.Mesh(geometry.clone(), glowMaterial);
    glowSphere.scale.set(1.05, 1.05, 1.05);
    scene.add(glowSphere);

    // Light source for shadows
    light = new THREE.DirectionalLight(0xFF5733, 3);
    light.position.set(5, 5, 7);
    scene.add(light);

    const pulseSpeed = 0.003; // Adjust the pulsation speed
    const initialScale = 1.05; // Adjust the initial scale
    glowSphere.scale.set(initialScale, initialScale, initialScale);

    function animateGlow() {
        const scaleFactor = initialScale + Math.sin(Date.now() * pulseSpeed) * 0.03;
        glowSphere.scale.set(scaleFactor, scaleFactor, scaleFactor);
        requestAnimationFrame(animateGlow);
    }

    // Start the animation loop for the glow
    animateGlow();

    const localPlane = new Plane(new THREE.Vector3(0, -1, 0), 0.8);
    const globalPlane = new Plane(new THREE.Vector3(-1, 0, 0), 0.1);
    material.clippingPlanes = [localPlane]; // Apply local clipping plane to the material
    material.clipShadows = true; // Enable shadows for the clipped objects

    globe = new THREE.Mesh(geometry, material);
    globe.castShadow = true;
    scene.add(globe);

    // Animation for rotating the globe
    function animate() {

        // Rotate the globe continuously
        globe.rotation.x += rotationSpeed * 6;
        globe.rotation.y += rotationSpeed * 6;

        // Update the light direction based on the globe's rotation
        const lightPosition = light.position;
        lightPosition.x = 5 * Math.cos(globe.rotation.y);
        lightPosition.y = 5 * Math.cos(globe.rotation.z);
        lightPosition.z = 7 * Math.sin(globe.rotation.y);

        render();
        requestAnimationFrame(animate);
    }

    function render() {
        renderer.render(backgroundScene, camera);
        renderer.render(scene, camera);
    }

    // Call animate globe
    animate();

    // Handle window resize
    function onWindowResize() {
        camera.aspect = canvasWidth / canvasHeight; // Use custom canvas dimensions
        camera.updateProjectionMatrix();
        renderer.setSize(canvasWidth, canvasHeight); // Use custom canvas dimensions
    }

    // Optionally, you can add a window resize event listener
    window.addEventListener('resize', onWindowResize);
}








