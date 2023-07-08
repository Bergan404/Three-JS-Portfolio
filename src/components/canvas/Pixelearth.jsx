import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const EarthPixel = () => {
    const earthPixel = useGLTF("./apple_macbook/scene.gltf");

    return (
        <mesh>
            {/* <pointLight intensity={5} /> */}
            <primitive object={earthPixel.scene} scale={10.5} position-y={-1}  rotation={[0.5, 0, 0]} />
            <ambientLight intensity={1.5} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
        </mesh>
    );
};

const EarthPixelCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 50,
                near: 0.1,
                far: 200,
                position: [2, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    // autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <EarthPixel />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthPixelCanvas;
