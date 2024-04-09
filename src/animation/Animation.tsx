import React, { useRef, useEffect } from 'react';
import * as THREE from 'three/src/Three.js';

const ThreeComponent = () => {
    const sceneRef = useRef();
    const renderer = useRef();
    const camera = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        renderer.current = new THREE.WebGLRenderer({ antialias: true });
        renderer.current.setSize(400, 350);
        renderer.current.setClearColor(0xffffff); // Fond blanc

        sceneRef.current.appendChild(renderer.current.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        // Crée le cube
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Positionne le cube au centre de la scène
        cube.position.set(0, 0, 0);

        // Positionne la caméra
        camera.current.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.current.render(scene, camera.current);
        };

        animate();

        window.addEventListener('resize', handleResize);

        // Définir un timeout pour rediriger après 3 secondes
        const redirectTimeout = setTimeout(() => {
            window.location.replace('/orders'); // Remplacez '/autre-page' par le chemin de la page vers laquelle vous souhaitez rediriger
        }, 3000);

        // Retirez le timeout lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(redirectTimeout);
            // Nettoyage
            scene.remove(cube);
            geometry.dispose();
            material.dispose();
            renderer.current.dispose();
        };
    }, []);

    const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.current.setSize(width, height);
        renderer.current.setPixelRatio(window.devicePixelRatio);

        camera.current.aspect = width / height;
        camera.current.updateProjectionMatrix();
    };

    return <div ref={sceneRef} />;
};

export default ThreeComponent;
