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
import { TbPointFilled } from "react-icons/tb";
import SpinningTextSmall from "./SpinningTextSmall";

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
  const y_head = useTransform(scrollYProgress, [0, 0.35], [200, -500]);

  useEffect(() => {
    if (inView) {
      gsap.to(".back", {
        opacity: 0,
        delay: 0.9,
        duration: 2,
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
        <div className="small-model">
          <Canvas id="model-canvas2">
            <Suspense fallback={null}>
              <GldModels
                path={"head.glb"}
                scale={12}
                position={[0, -4.7, 0]}
                className="model"
              />
              {/* <ambientLight intensity={1} /> */}
              <directionalLight args={["#15c5bf", 5]} position={[0, 0, 5]} />
              {/* <spotLight
                args={["#ffffff", 3]}
                position={[0, 0, 2]}
                distance={7}
                angle={angleRadian(40)}
                penumbra={1}
                decay={2}
                ref={lightRef}
              /> */}

              <Environment background>
                <mesh scale={10} receiveShadow>
                  <sphereGeometry args={[1, 64, 64]} />
                  <meshBasicMaterial
                    side={THREE.BackSide}
                    color="#63ceca"
                    // color="#0a0a0a"
                  />
                </mesh>
              </Environment>
            </Suspense>
          </Canvas>
          <div className="spinnig__container">
            <SpinningTextSmall text={"ABOLAJI TEMITOPE * DEVELOPER * "} />
          </div>
        </div>
        <div className="canva-container" ref={ref}>
          <div className="model-container">
            <div className="new-cont">
              <Canvas id="model-canvas">
                <Suspense fallback={null}>
                  <GldModels
                    path={"head.glb"}
                    scale={12}
                    position={[0, -3.4, 0]}
                    className="model"
                  />
                  {/* <ambientLight intensity={1} /> */}
                  <directionalLight
                    args={["#0a0a0a", 5]}
                    position={[0, 0, 5]}
                  />
                  <spotLight
                    args={["#ffffff", 3]}
                    position={[0, 0, 2]}
                    distance={7}
                    angle={angleRadian(40)}
                    penumbra={1}
                    decay={2}
                    ref={lightRef}
                  />

                  <Environment background>
                    <mesh scale={10} receiveShadow>
                      <sphereGeometry args={[1, 64, 64]} />
                      <meshBasicMaterial
                        side={THREE.BackSide}
                        color="#0a0a0a"
                        // color="#0a0a0a"
                      />
                    </mesh>
                  </Environment>
                </Suspense>
              </Canvas>
              <div className="back"></div>
            </div>
            {/* <motion.h1
              style={{
                y: y_head,
              }}
            >
              ABOUT ME
            </motion.h1> */}
            <div className="text-section">
              <h1>About Me </h1>
              <p className="main">
                Hello and welcome to my portfolio! My name is <span>Tope</span>,
                and I am a passionate programmer with a coding journey that
                began in 2020, I have dedicated myself to mastering the art of{" "}
                <span>JavaScript development</span>. My expertise lies in
                creating
                <span> dynamic web applications</span> using the power of
                javaScript&apos;s vast ecosystem.
                <br />
                <br />
                In addition to my work in web development, I am also studying
                <span> Mechanical engineering</span> at college. This unique
                combination of skills allows me to bring a fresh perspective to
                problem-solving.
                <br />
                <br />
                Here are a few technologies i&apos;ve been working with
                recently:
              </p>
              <div className="languages">
                <div className="lang">
                  <p>
                    <TbPointFilled />
                    JavaScript (ES6+)
                  </p>
                  <p>
                    <TbPointFilled />
                    React
                  </p>
                </div>
                <div className="lang">
                  <p>
                    <TbPointFilled />
                    Node
                  </p>
                  <p>
                    <TbPointFilled />
                    Three.js
                  </p>
                </div>
                <div className="lang">
                  <p>
                    <TbPointFilled />
                    GSAP
                  </p>
                  <p>
                    <TbPointFilled />
                    Framer Motion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Intro>
    </Distance>
  );
}
const Intro = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  /* height: 130vh; */
  cursor: auto;
  background-color: #f6f6f6;
  margin-top: 50px;

  @media screen and (max-width: 750px) {
    margin: 30px 0px;
    height: fit-content;
    align-items: center;
    justify-content: center;
  }
  .small-model {
    display: none;
    height: 400px;
    width: 95%;
    margin: 0px auto;
    margin-bottom: 50px;
    position: relative;
    @media screen and (max-width: 750px) {
      display: block;
      width: 90%;
    }
    @media screen and (max-width: 700px) {
    }
    @media screen and (max-width: 550px) {
      width: 95%;
      height: 320px;
    }
    .spinnig__container {
      position: absolute;
      bottom: -45px;
      right: -5px;
      z-index: 2;
    }

    #model-canvas2 {
      border-radius: 20px;
    }
  }

  .canva-container {
    /* opacity: 0; */
    width: 100%;
    margin: 0px auto;
    /* height: fit-content; */

    z-index: -1;
    /* background-color: #0a0a0a; */
    margin-bottom: 100px;
    @media screen and (max-width: 1200px) {
      /* height: 70vh; */
    }
    @media screen and (max-width: 950px) {
      /* height: 60vh; */
    }
    @media screen and (max-width: 750px) {
    }

    .model-container {
      width: 85vw;
      margin: 0px auto;
      padding: 0px 30px;
      height: 100%;
      display: grid;
      grid-template-columns: 50% 45%;
      gap: 70px;

      @media screen and (max-width: 990px) {
        display: flex;
        flex-direction: column;
      }
      @media screen and (max-width: 750px) {
        padding: 0px;
      }

      .new-cont {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        cursor: url(${(props) => props.cursor}), auto;
        @media screen and (max-width: 750px) {
          display: none;
        }

        .back {
          position: absolute;
          top: 0;
          left: 0;
          max-height: 70vh;
          min-height: 500px;
          border-radius: 20px;
          width: 100%;
          background-color: #0a0a0a;
          opacity: 1;
          @media screen and (max-width: 750px) {
            display: none;
          }
        }
      }
    }
  }
  #model-canvas {
    width: 100%;
    max-height: 70vh;
    min-height: 500px;
    border-radius: 20px;
    cursor: url(${(props) => props.cursor}), auto;
  }
  .text-section {
    margin: 0px auto;
    text-align: left;

    @media screen and (max-width: 750px) {
    }
    p.main {
      font-family: "euclidMedium";
      color: #2b2b2b;
      font-size: 19px;
      margin-bottom: 0px;
      @media screen and (max-width: 750px) {
        color: #292929;
      }
      @media screen and (max-width: 991px) {
        text-align: left;
        font-size: 18px;
      }
      @media screen and (max-width: 500px) {
        text-align: left;
        font-size: 15px;
      }
    }
    .languages {
      margin-top: 20px;
      color: #5e5e63;
      width: 70%;
      font-size: 16px;
      font-family: "euclidRegular";
      @media screen and (max-width: 500px) {
        width: 90%;
        font-size: 13px;
      }

      svg {
        color: #178582;
      }
      .lang {
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
      }
    }
    h1 {
      font-family: "euclidSemiBold";
      /* background: linear-gradient(90deg, #161616 20%, #5e5e63 70%);
      background-size: 100% auto;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
      margin-bottom: 20px;
      @media screen and (max-width: 750px) {
        display: block;
      }
    }
    span {
      color: #178582;
    }
  }
`;
export default About;
