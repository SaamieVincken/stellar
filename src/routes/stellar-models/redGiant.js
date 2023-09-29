import * as THREE from 'three';

let scene, camera, renderer, cube;

export function initializeRedGiant() {
    // Create scene
    scene = new THREE.Scene();

    // Create camera with the same aspect ratio as the canvas
    const canvasWidth = 300; // Set the desired width for the canvas
    const canvasHeight = 300; // Set the desired height for the canvas
    const aspectRatio = canvasWidth / canvasHeight;
    camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    // Create renderer with a transparent background
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(canvasWidth, canvasHeight);

    // Set CSS style to make the renderer centered within the container
    const rendererContainer = document.getElementById('renderer-container');
    rendererContainer.style.position = 'relative'; // Set to relative positioning
    rendererContainer.style.width = `${canvasWidth}px`; // Set the width
    rendererContainer.style.height = `${canvasHeight}px`; // Set the height
    rendererContainer.appendChild(renderer.domElement);

    // Create cube
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();
}
