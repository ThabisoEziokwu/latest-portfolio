import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect } from "react";

function Models({ path, scale = 1, position = [0, 0, 0] }) {
  const ref = useRef();

  const gltf = useLoader(GLTFLoader, path);

  useFrame(() => {
    // ref.current.rotation.y += 0.001;
  });
  useEffect(() => {
    ref.current.rotation.x = 0.02;
  });

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={scale}
        position={position}
      />
    </>
  );
}

export default Models;
