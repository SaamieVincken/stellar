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
        'fogDensity': { value: 0.85 },
        'fogColor': { value: new THREE.Vector3(0, 0, 0) },
        'time': { value: 1.0 },
        'uvScale': { value: new THREE.Vector2(2.0, 1.0) },
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
    vec2 T2 = vUv + vec2( - 0.6, 2.0 ) * time * 0.01;
    
    T1.x += noise.x * 2.0;
    T1.y += noise.y * 2.0;
    T2.x -= noise.y * 0.2;
    T2.y += noise.z * 0.2;
    
    float p = texture2D( texture1, T1 * 1.0 ).a;
    
    vec4 color = texture2D( texture2, T2 * 0.5 );
    vec4 lavaColor = color * ( vec4( p, p, p, p ) * 4.5 ) + ( color * color - 0.7 );
    
    vec4 baseColor = mix(lavaColor, vec4(starColor, 0.4), 0.1 + 0.5 * p); 
    
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

    let previousTime = performance.now();

    function animate() {
        if (uniforms !== null && uniforms !== undefined && renderer !== null && renderer !== undefined && camera !== null && camera !== undefined) {
            const currentTime = performance.now();
            const deltaTime = (currentTime - previousTime) / 1000;
            previousTime = currentTime;

            const rotationSpeed = 0.1;
            const rotationIncrement = rotationSpeed * deltaTime;

            uniforms['time'].value += 0.007;
            globe.rotation.x += rotationIncrement;
            globe.rotation.y += rotationIncrement;

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

    window.addEventListener('resize', onWindowResize);

        animate();

        window.addEventListener('resize', onWindowResize);

    }

export function updateStar(hslColor, radius, luminosityClass, phase) {
    if (!globe || !light) {
        console.warn('Star has not been initialized. Call initializeStar first.');
        return;
    }

    const textureLoader = new THREE.TextureLoader();
    if (phase === "Blue Giant") {
        uniforms['texture2'].value = textureLoader.load('src/lib/images/fluidic-blue-abstract-lava-stone-texture-background_1000124-55482.png');
        uniforms['fogDensity'].value = 0.85;
    }
    if(phase === "Red Dwarf"){
        uniforms['texture2'].value = textureLoader.load('src/lib/images/1000_F_190595160_zjFOoCELy534iZ4cMvPmLA3nUVYcfLZU.png');
        uniforms['fogDensity'].value = 0.75;
    }
    if(phase === "Red Giant"){
        uniforms['texture2'].value = textureLoader.load('src/lib/images/1000_F_190595160_zjFOoCELy534iZ4cMvPmLA3nUVYcfLZU.png');
        uniforms['fogDensity'].value = 1;
    }
    if(phase === "White Dwarf"){
        uniforms['texture2'].value = textureLoader.load('src/lib/images/lightblue.png');
    }
    if(phase === "Yellow Dwarf"){
        uniforms['fogDensity'].value = 0.15;
    }
    uniforms['starColor'].value = hslColor !== undefined ? new THREE.Color().setHSL(hslColor[0] / 360, hslColor[1] / 100, hslColor[2] / 100) : uniforms['starColor'].value; // Update the uniform instead of the material color

    const finalRadius = radius;
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
    // Dispose of geometries, materials, and textures
    if (globe) {

        if (scene !== null && scene !== undefined) {

            window.removeEventListener('resize', onWindowResize);

            // Create a particle system for dissolving
            const particleGeometry = new THREE.BufferGeometry();
            const particleMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.05 });
            const particles = new THREE.Points(particleGeometry, particleMaterial);
            scene.add(particles);

            // Animate particles for dissolving effect
            const particleCount = 5000; // Adjust the number of particles
            const positions = new Float32Array(particleCount * 3);
            const velocities = new Float32Array(particleCount * 3);

            // Initialize particle positions and velocities
            for (let i = 0; i < particleCount; i++) {
                const index = i * 3;
                positions[index] = Math.random() * 4 - 2; // Adjust the range
                positions[index + 1] = Math.random() * 4 - 2; // Adjust the range
                positions[index + 2] = Math.random() * 4 - 2; // Adjust the range

                velocities[index] = (Math.random() - 0.5) * 0.1; // Adjust the speed
                velocities[index + 1] = (Math.random() - 0.5) * 0.1; // Adjust the speed
                velocities[index + 2] = (Math.random() - 0.5) * 0.1; // Adjust the speed
            }

            particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const particleTimer = setInterval(() => {
                // Update particle positions
                for (let i = 0; i < particleCount; i++) {
                    const index = i * 3;
                    positions[index] += velocities[index];
                    positions[index + 1] += velocities[index + 1];
                    positions[index + 2] += velocities[index + 2];
                }
                particleGeometry.attributes.position.needsUpdate = true;

                // Reduce particle opacity for fading effect
                particleMaterial.opacity -= 0.05; // Adjust the fading speed
                particleMaterial.needsUpdate = true;

                // Check if particles have faded out
                if (particleMaterial.opacity <= 0) {
                    scene.remove(particles);
                    clearInterval(particleTimer);
                }
            }, 106);
            if (globe.material) {
                globe.material.dispose();
            }

            // Dispose of geometry
            if (globe.geometry) {
                globe.geometry.dispose();
            }
            scene.remove(globe);

            // Dispose of any child objects in the scene
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    // Dispose of geometry and material
                    if (object.geometry) {
                        object.geometry.dispose();
                    }
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach((material) => {
                                material.dispose();
                            });
                        } else {
                            object.material.dispose();
                        }
                    }
                }
            });
        }
    }

    // Dispose of textures
    if (uniforms && uniforms['texture1'] && uniforms['texture1'].value) {
        uniforms['texture1'].value.dispose();
    }
    if (uniforms && uniforms['texture2'] && uniforms['texture2'].value) {
        uniforms['texture2'].value.dispose();
    }

    // Clear the renderer
    if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement = null;
        renderer = null;
    }

    // Reset variables to null
    globe = null;
    uniforms = null;
    scene = null;
}

