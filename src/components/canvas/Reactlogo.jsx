import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Reactlogo = (props) => {
  const react = useGLTF("./react_logo/scene.gltf");


  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={1.5}>
        {/* Replace icosahedronGeometry with the GLTF model */}
        <primitive object={react.scene} />
        {/* <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        /> */}
        {/* <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={props.decal}
          flatShading
        /> */}
      </mesh>
    </Float>
  );
};

const ReactlogoCanvas = ({ icon, gltfUrl }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }} >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {/* Pass the GLTF model URL to the Reactlogo component */}
        <Reactlogo gltfUrl={gltfUrl} decal={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ReactlogoCanvas;
