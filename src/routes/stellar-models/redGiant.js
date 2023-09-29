import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, globe, controls, light;
let rotating = false; // Flag to track if the globe is rotating
let rotationSpeed = 0.001; // Initial rotation speed

export function initializeRedGiant() {
    // Custom canvas dimensions
    const canvasWidth = 400; // Set your desired canvas width
    const canvasHeight = 300; // Set your desired canvas height

    // Create scene
    scene = new THREE.Scene();

    // Create camera
    camera = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 1, 1000);
    camera.position.z = 5;

    // Create renderer with a transparent background and shadows
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasWidth, canvasHeight); // Set custom canvas dimensions
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Use soft shadows

    // Set CSS style to make the renderer centered within the container
    const rendererContainer = document.getElementById('renderer-container');
    rendererContainer.style.position = 'relative'; // Set to relative positioning
    rendererContainer.style.width = `${canvasWidth}px`; // Use custom width
    rendererContainer.style.height = `${canvasHeight}px`; // Use custom height
    rendererContainer.appendChild(renderer.domElement);

    // Create a rotating 3D globe
    const sphereRadius = 2.8; // Adjust the radius as needed
    const geometry = new THREE.SphereGeometry(sphereRadius, 64, 32); // Adjust the parameters as needed
    const material = new THREE.MeshStandardMaterial({ // Use MeshStandardMaterial for shadows
        color: 0x00ff00, // Adjust the color as needed
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
    });

    globe = new THREE.Mesh(geometry, material);
    globe.castShadow = true; // Allow the globe to cast shadows
    scene.add(globe);

    // Light source for shadows
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7);
    light.castShadow = true;
    scene.add(light);

    // Create OrbitControls for interactive rotation
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 10;
    controls.enablePan = false; // Disable panning

    // Event listener for mouse down
    document.addEventListener('mousedown', () => {
        rotating = true;
        rotationSpeed = 0.005; // Increase rotation speed when mouse is held
    });

    // Event listener for mouse up
    document.addEventListener('mouseup', () => {
        rotating = false;
        rotationSpeed = 0.001; // Reset rotation speed when mouse is released
    });

    // Animation loop for rotating the globe
    function animate() {
        if (rotating) {
            // Rotate the globe faster when mouse is held
            globe.rotation.x += rotationSpeed * 25;
            globe.rotation.y += rotationSpeed * 25;
        }

        // Update the light direction based on the globe's rotation
        const lightPosition = light.position;
        lightPosition.x = 5 * Math.cos(globe.rotation.y);
        lightPosition.z = 7 * Math.sin(globe.rotation.y);

        render();
        requestAnimationFrame(animate);
    }

    function render() {
        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize (optional)
    function onWindowResize() {
        camera.aspect = canvasWidth / canvasHeight; // Use custom canvas dimensions
        camera.updateProjectionMatrix();
        renderer.setSize(canvasWidth, canvasHeight); // Use custom canvas dimensions
    }

    // Optionally, you can add a window resize event listener
    window.addEventListener('resize', onWindowResize);
}








