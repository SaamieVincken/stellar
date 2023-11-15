import * as THREE from 'three';

let scene, camera, renderer, globe, light;

export function initializeStar(color, opacity, radius, luminosity) {
    const defaultColor = 0xD8BFD8; // Lighter Lavender
    const defaultOpacity = 1;
    const defaultRadius = 1;
    const defaultLuminosity = 1; // Default luminosity value

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(600, 600);
    const rendererContainer = document.getElementById('renderer-container');
    rendererContainer.appendChild(renderer.domElement);

    const finalColor = color !== undefined ? color : defaultColor;
    const finalOpacity = opacity !== undefined ? opacity : defaultOpacity;
    const finalRadius = radius !== undefined ? radius : defaultRadius;
    const finalLuminosity = luminosity !== undefined ? luminosity : defaultLuminosity;

    const geometry = new THREE.SphereGeometry(finalRadius);
    const material = new THREE.MeshStandardMaterial({
        color: finalColor,
        transparent: true,
        opacity: finalOpacity,
    });
    globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    light = new THREE.DirectionalLight(0xffffff, finalLuminosity); // Adjust luminosity here
    light.position.set(5, 5, 7);
    scene.add(light);

    function animate() {
        globe.rotation.x += 0.001;
        globe.rotation.y += 0.001;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();

    function onWindowResize() {
        camera.aspect = 1;
        camera.updateProjectionMatrix();
        renderer.setSize(600, 600);
    }
    window.addEventListener('resize', onWindowResize);
}
