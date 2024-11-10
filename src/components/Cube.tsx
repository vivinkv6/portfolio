'use client'; // Ensure this component is only rendered on the client side
import dynamic from 'next/dynamic';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { useRef } from "react";
import { TextureLoader } from "three";
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Define your image paths correctly
const imagePaths = [
    '/about/pic6.jpg','/about/pic4.jpg', '/about/pic5.jpg',  
    '/about/pic2.jpg','/about/pic3.jpg','/about/pic1.jpg'
];

// Separate Cube component that uses three.js, dynamically imported to disable SSR
const DynamicCube = dynamic(() => Promise.resolve(CubeComponent), { ssr: false });

function CubeComponent() {
    const textures = useLoader(TextureLoader, imagePaths);
    const cubeRef = useRef<THREE.Mesh>(null!);

    // Rotate cube along the Y-axis only
    useFrame(() => {
        if (cubeRef.current) {
            cubeRef.current.rotation.y += 0.002; // Adjust rotation speed
        }
    });

    // Set texture properties to control how they cover each face
    textures.forEach(texture => {
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
    });

    return (
        <mesh ref={cubeRef} position={[0, 0, 0]}>
            <boxGeometry args={[4, 4, 4]} />
            {/* Apply each texture to a specific face of the cube */}
            {textures.map((texture, index) => (
                <meshStandardMaterial key={index} map={texture} attach={`material-${index}`} />
            ))}
        </mesh>
    );
}

export default function Cube() {
    return (
        <div className="w-full h-full relative">
            <Canvas style={{ height: '100%', width: '100%' }}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={2} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <DynamicCube />
            </Canvas>
        </div>
    );
}
