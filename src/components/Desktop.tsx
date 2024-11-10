'use client';
import {useGLTF} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import {useEffect, useRef} from 'react';
import {Object3D} from "three";

function Model() {
    const model = useGLTF('/models/scene.gltf');
    const ref = useRef<Object3D>();

    // Set the initial scale and position directly
    useEffect(() => {
        if (ref.current) {
            // Set fixed scale
            ref.current.scale.set(0.5, 0.5, 0.5); // Adjust these values as needed

            // Set fixed position
            ref.current.position.set(0, -1, 3); // Adjust these values as needed
        }
    }, []);

    // Log position and scale if you want to track values
    useFrame(() => {
        if (ref.current) {
            const {x, y, z} = ref.current.position;
            const {x: sx, y: sy, z: sz} = ref.current.scale;
            console.log("Model position:", {x, y, z});
            console.log("Model scale:", {sx, sy, sz});
        }
    });

    return <primitive ref={ref} object={model.scene}/>;
}

function DesktopModel() {
    return (
        <Canvas className="w-full h-full" camera={{position: [0, 0, 6], fov: 70}}>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[5, 5, 5]} intensity={1}/>
            <Model/>
        </Canvas>
    );
}

export default DesktopModel;
