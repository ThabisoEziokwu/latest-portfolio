import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useState } from "react";

function Models({ path, scale = 1, position = [0, 0, 0] }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, path);
  const [direction, setDirection] = useState(1);
  const startPoint = 1;
  const endPoint = 1;
  const speed = 0.0005;
  // useFrame(() => {
  //   ref.current.rotation.y += direction * speed;
  //   if (ref.current.rotation.y === 1.0000000000000007) {
  //     setDirection(-direction);
  //   }
  //   if (ref.current.rotation.x === -1.0000000000000007) {
  //     setDirection(-direction);
  //   }
  //   console.log(direction, ref.current.rotation.y);
  // });
  useFrame(() => {
    ref.current.rotation.y += direction * speed;
    // console.log(ref.current.rotation.y);
  });
  useEffect(() => {
    ref.current.rotation.x = 0.02;

    setInterval(() => {
      setDirection(-direction);
    }, 50000);
  });
  useEffect(() => {
    ref.current.rotation.y = -0.9465000000000141;
  }, []);

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
