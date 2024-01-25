// import * as THREE from 'three';
//
// let scene, camera, renderer, explosionMaterial, explosionMesh, particleSystem, clock, rendererContainer;
//
// export function initializeSupernova() {
//     // Scene setup
//     scene = new THREE.Scene();
//
//     // Camera setup
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;
//
//     // Renderer setup
//     renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     rendererContainer = document.getElementById('renderer-container');
//     if (rendererContainer) {
//         rendererContainer.appendChild(renderer.domElement);
//     } else {
//         document.body.appendChild(renderer.domElement);
//     }
//
//     // Particle System setup
//     let particles = 5000;
//     let geometry = new THREE.BufferGeometry();
//     let positions = [];
//     let colors = [];
//     let color = new THREE.Color();
//     for (let i = 0; i < particles; i++) {
//         // Positions
//         positions.push((Math.random() * 2 - 1) * 500);
//         positions.push((Math.random() * 2 - 1) * 500);
//         positions.push((Math.random() * 2 - 1) * 500);
//         // Colors
//         color.setHSL(i / particles, 1.0, 0.5);
//         colors.push(color.r, color.g, color.b);
//     }
//     geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//     geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
//     let material = new THREE.PointsMaterial({ size: 5, vertexColors: true });
//     particleSystem = new THREE.Points(geometry, material);
//     scene.add(particleSystem);
//
//     // Clock for controlling animation speed
//     clock = new THREE.Clock();
//
//     // Start rendering the scene
//     render();
// }
//
// function render() {
//     requestAnimationFrame(render);
//
//     // Update particle system each frame
//     const delta = clock.getDelta();
//     particleSystem.rotation.y += 0.1 * delta;  // Rotate the system for a dynamic effect
//
//     renderer.render(scene, camera);
// }
