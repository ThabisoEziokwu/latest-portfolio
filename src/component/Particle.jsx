import * as THREE from "three";
import { TextureLoader } from "three";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import { BufferAttribute, BufferGeometry } from "three";
import gsap from "gsap";
import { useLoader } from "@react-three/fiber";
import star from "../assets/images/stars.png";

function Particle() {
  const [mouseHover, setMouseHover] = useState(true);
  document.addEventListener("mouseenter", () => {
    setMouseHover(true);
  });
  document.addEventListener("mouseleave", () => {
    setMouseHover(false);
  });
  // Make the particles
  const count = 3000;
  const meshRef = useRef(null);
  const posArray = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    posArray[i] = (Math.random() - 0.5) * 7;
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

  useFrame((state) => {
    meshRef.current.rotation.x += 0.0007;
    meshRef.current.rotation.y += 0.001;
    meshRef.current.rotation.z += 0.001;

    const { x, y } = state.mouse;

    if (mouseHover) {
      gsap.to(meshRef.current.rotation, {
        x: y,
        y: -x,
      });
    }
  });

  const starTexture = useLoader(TextureLoader, star);

  return (
    <>
      <group>
        <points ref={meshRef}>
          <bufferGeometry attachObject={geometry} {...geometry} />
          <pointsMaterial
            args={[
              {
                size: 0.017,
                color: "#686868",
                map: starTexture,
                transparent: true,
              },
            ]}
          />
        </points>
      </group>
    </>
  );
}

export default Particle;
