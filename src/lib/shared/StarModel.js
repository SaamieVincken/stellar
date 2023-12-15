import * as THREE from 'three';

export function initializeStar(rgbColor, radius, luminosityClass) {
    const defaultColor = new THREE.Color(0xD8BFD8); // Light Lavender
    const defaultOpacity = 1;
    const defaultRadius = 1;
    const defaultLuminosity = 1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(600, 600);
    const rendererContainer = document.getElementById('renderer-container');
    if (rendererContainer) {
        rendererContainer.appendChild(renderer.domElement);

        const finalColor = rgbColor !== undefined ? new THREE.Color(`rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`) : defaultColor;
        const finalOpacity = defaultOpacity;
        const finalRadius = radius !== undefined ? radius : defaultRadius;
        const finalLuminosity = luminosityClass !== undefined ? luminosityClass : defaultLuminosity;

        const geometry = new THREE.SphereGeometry(finalRadius);
        const material = new THREE.MeshStandardMaterial({
            color: finalColor,
            transparent: true,
            opacity: finalOpacity,
        });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        const light = new THREE.DirectionalLight(0xffffff, finalLuminosity);
        light.position.set(5, 5, 7);
        scene.add(light);

        function animate() {
            // Rotate the globe
            globe.rotation.x += 0.001;
            globe.rotation.y += 0.001;

            // Update the camera aspect ratio and render the scene
            camera.aspect = rendererContainer.clientWidth / rendererContainer.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(rendererContainer.clientWidth, rendererContainer.clientHeight);
            renderer.render(scene, camera);

            requestAnimationFrame(animate);
        }

        // Trigger the animation loop
        animate();

        // Handle window resize
        function onWindowResize() {
            camera.aspect = rendererContainer.clientWidth / rendererContainer.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(rendererContainer.clientWidth, rendererContainer.clientHeight);
        }

        window.addEventListener('resize', onWindowResize);
    }
}
