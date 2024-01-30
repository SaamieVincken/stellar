<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import "../../app.css";
    import Footer from "../Footer.svelte";
    import {star} from "$lib/shared/StarStore.js";
    let container;


    onMount(() => {
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        let renderer = new THREE.WebGLRenderer();
        let isInBlackHolePhase = false;
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        let starsGeometry = new THREE.BufferGeometry();
        let starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });

        let starPositions = [];
        for (let i = 0; i < 1000; i++) {
            let x = THREE.MathUtils.randFloatSpread(2000);
            let y = THREE.MathUtils.randFloatSpread(2000);
            let z = THREE.MathUtils.randFloatSpread(2000);

            starPositions.push(x, y, z);
        }
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
        let starField = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starField);

        camera.position.z = 1000;

        function animate() {
            requestAnimationFrame(animate);
            starField.rotation.y += 0.0005;
            if ($star !== undefined) {
                if ($star.phase === 'Black Hole') {
                    if (!isInBlackHolePhase) {
                        isInBlackHolePhase = true;
                    }
                    suckInStars();
                } else {
                    if (isInBlackHolePhase) {
                        resetStars();
                        isInBlackHolePhase = false;
                    }
                }
            }
            renderer.render(scene, camera);
        }
        animate();

        function resetStars() {
            let positions = starField.geometry.attributes.position.array;

            for (let i = 0; i < positions.length; i += 3) {
                // Reset star to a random position with the same spread as initially set
                positions[i] = THREE.MathUtils.randFloatSpread(2000);
                positions[i + 1] = THREE.MathUtils.randFloatSpread(2000);
                positions[i + 2] = THREE.MathUtils.randFloatSpread(2000);
            }
            starField.geometry.attributes.position.needsUpdate = true; // Important!
        }


        function suckInStars() {
            let positions = starField.geometry.attributes.position.array;
            let suctionPower = 0.98; // Adjust this value to make the stars move faster or slower towards the center
            let suctionPowerY = 0.99; // Adjust this value for the upward pull
            let minDistance = 400; // Minimum distance to the center before a star is considered 'consumed'
            let centerYOffset = 100; // Adjust this value to move the center point upwards

            for (let i = 0; i < positions.length; i += 3) {
                // Calculate distance from the shifted center
                let distance = Math.sqrt(positions[i] * positions[i] + (positions[i + 1] - centerYOffset) * (positions[i + 1] - centerYOffset) + positions[i + 2] * positions[i + 2]);

                if (distance > minDistance) {
                    // Move the star towards the shifted center
                    positions[i] *= suctionPower; // Move the star towards the center on the x axis
                    // Adjust the y position to move towards the higher center point
                    positions[i + 1] = (positions[i + 1] - centerYOffset) * suctionPowerY + centerYOffset;
                    positions[i + 2] *= suctionPower; // Move the star towards the center on the z axis
                } else {
                    // Reset star to a random position far from the center
                    positions[i] = THREE.MathUtils.randFloatSpread(2000);
                    positions[i + 1] = THREE.MathUtils.randFloatSpread(2000);
                    positions[i + 2] = THREE.MathUtils.randFloatSpread(2000);
                }
            }
            starField.geometry.attributes.position.needsUpdate = true; // Important!
        }



        function onWindowResize(){
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }
        window.addEventListener('resize', onWindowResize, false);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', onWindowResize);
            container.removeChild(renderer.domElement);
        }

    });
</script>

<div class="app min-h-screen fixed" bind:this={container}>
    <main class="absolute inset-0 z-10 overflow-y-auto">
        <slot />
    </main>
    <Footer />
</div>

<style>
    .app {
        position: absolute;
        z-index: -1;
        min-height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
    }

</style>
