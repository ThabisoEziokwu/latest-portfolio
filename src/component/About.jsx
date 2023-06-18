import styled from "styled-components";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Distance from "../utils/Distance";
import GldModels from "../utils/GldModels";
import { angleRadian } from "../utils/angleToradian";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import cursor from "../assets/images/cursor-01.png";

function About({ setaboutHeight, setNavAbout }) {
  const lightRef = useRef();
  const aboutRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-1000, 4000]);

  useEffect(() => {
    if (inView) {
      gsap.to(".canva-container", {
        opacity: 1,
        delay: 0.6,
        duration: 1.5,
      });
      setNavAbout(true);
      // console.log("its in view");
    }
    if (!inView) {
      setNavAbout(false);
    }
  });

  useEffect(() => {
    const yConvert = (value) => {
      const newY = (6 * value - innerHeight * 3) / innerHeight;
      return -newY;
    };
    const handleMouse = (event) => {
      const spotLight = lightRef.current;
      if (!!spotLight) {
        const { clientX, clientY } = event;
        const spotLightPosition = spotLight.position;

        const x = clientX;
        const y = clientY;

        spotLightPosition.x = (x / innerWidth) * 6 - 3;
        spotLightPosition.y = yConvert(y);
      }
    };

    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  });

  return (
    <Distance dist={setaboutHeight}>
      <Intro cursor={cursor} ref={aboutRef}>
        <div className="text-section">
          <h1>About Me</h1>
          <p className="main">
            Hello and welcome to my portfolio! My name is <span>Tope</span>, and
            I am a passionate programmer with a coding journey that beganin
            2020, i have dedicated myself to mastering the art of{" "}
            <span>JavaScript development</span>. My expertise lies in creating
            <span>dynamic web applications</span> using the power of
            javaScript&apos;s vast ecosystem.
            <br />
            In addition to my work in web development, I am also studying
            <span>Mechanical engineering</span> at college. This unique
            combination of skills allows me to bring a fresh perspective to
            problem-solving.
            <br />
            Here are a few technologies i&apos;ve been working with recently:
          </p>
        </div>
        <div className="canva-container" ref={ref}>
          <Canvas id="model-canvas">
            <Suspense fallback={null}>
              <GldModels path={"head.glb"} scale={10} position={[0, -2.3, 0]} />
              {/* <ambientLight intensity={1} /> */}
              <directionalLight args={["#0a0a0a", 5]} position={[0, 0, 5]} />
              <spotLight
                args={["#ffffff", 3]}
                position={[0, 0, 2]}
                distance={5}
                angle={angleRadian(40)}
                penumbra={1}
                decay={2}
                ref={lightRef}
              />

              <Environment background>
                <mesh scale={10} receiveShadow>
                  <sphereGeometry args={[1, 64, 64]} />
                  <meshBasicMaterial side={THREE.BackSide} color="#0a0a0a" />
                </mesh>
              </Environment>
            </Suspense>
          </Canvas>
        </div>
        <Floater
          style={{
            x,
          }}
        >
          ABOUT ME
        </Floater>
      </Intro>
    </Distance>
  );
}
const Intro = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 130vh;
  cursor: url(${(props) => props.cursor}), auto;
  background-color: #f6f6f6;
  display: flex;
  align-items: end;
  padding-bottom: 40px;

  @media screen and (max-width: 750px) {
    margin: 30px 0px;
    height: fit-content;
    align-items: center;
    justify-content: center;
    cursor: auto;
  }

  .canva-container {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    width: 98%;
    margin: 0px auto;
    height: 100%;
    border-radius: 40px;
    z-index: -1;
    overflow: hidden;

    @media screen and (max-width: 750px) {
      display: none;
    }
  }
  #model-canvas {
    width: 100%;
    height: 100%;
  }
  .text-section {
    max-width: 800px;
    margin: 0px auto;
    text-align: center;

    @media screen and (max-width: 750px) {
      width: 80%;
    }
    p.main {
      font-family: "euclidRegular";
      color: #f6f6f6;
      font-size: 19px;
      @media screen and (max-width: 750px) {
        color: #000000;
      }
    }
    h1 {
      font-family: "euclidSemiBold";
      color: #f6f6f6;
      color: #f6f6f6;
      @media screen and (max-width: 750px) {
        background: linear-gradient(90deg, #161616 20%, #5e5e63 70%);
        background-size: 100% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    span {
      color: #178582;
    }
  }
`;
const Floater = styled(motion.h1)`
  font-family: "euclidRegular";
  font-size: 60px;
  position: fixed;
  top: 50%;
  left: 0px;
  color: #00000097;
  display: none;
`;
export default About;
