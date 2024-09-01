import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Button from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Particle from "./Particle";

function Hero({ contactHeight }) {
  const topLevel = 0;

  const handleClick = () => {
    window.scrollTo(0, contactHeight);
  };
  const handleScroll = () => {
    const currentScrollposition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollposition - topLevel > 300) {
      // gsap.to(".hero-text", {
      //   opacity: 0,
      //   duration: 0.5,
      // });
      gsap.to(".canvas-container", {
        opacity: 0,
        delay: 0.3,
        duration: 1,
      });
    } else {
      // gsap.to(".hero-text", {
      //   opacity: 1,
      // });
      gsap.to(".canvas-container", {
        opacity: 1,
        delay: 0.3,
        duration: 1,
      });
    }
  };
  document.addEventListener("scroll", handleScroll);
  const heroRef = useRef();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["end end", "end start"],
  });
  const y_para = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <ViewPort ref={heroRef}>
      <div className="container-md">
        <div className="flex-cont">
          <div className="hero-text">
            <motion.div className="first-text">
              <motion.p
                style={{
                  fontFamily: "euclidMedium",
                }}
              >
                Build. Design. Improve 🔥
              </motion.p>
            </motion.div>

            <h1>
              I transform <span>ideas</span> into visually striking{" "}
              <span>web solution</span>.
            </h1>
            <motion.div
              onClick={() => {
                handleClick();
              }}
            >
              <Button>Let&apos;s do this</Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="canvas-container">
        <Canvas id="hero-canvas" shadows>
          <Suspense fallback={null}>
            <Particle />
          </Suspense>
        </Canvas>
      </div>
    </ViewPort>
  );
}
const ViewPort = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background: #f6f6f6;

  @media screen and (max-width: 1100px) {
    height: 98vh;
  }
  @media screen and (max-width: 1000px) {
    justify-content: end;
    align-items: center;
    padding-bottom: 8vh;
  }
  @media screen and (max-width: 750px) {
    height: fit-content;
    padding-top: 100px;
  }


  .canvas-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* z-index: -1; */
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  #hero-canvas {
    height: 100%;
    width: 100%;
    pointer-events: none;
    /* z-index: -1; */
  }
  .flex-cont {
    .hero-text {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      color: #292929;
      /* @media screen and (max-width: 900px) {
        gap: 40px;
      } */
      @media screen and (max-width: 700px) {
        gap: 80px;
      }
      @media screen and (max-width: 500px) {
        gap: 30px;
      }
      @media screen and (max-width: 400px) {
        gap: 10px;
      }
      @media screen and (max-width: 400px) {
        gap: 10px;
      }
      @media screen and (max-width: 300px) {
        gap: 0px;
      }
      .first-text {
        pointer-events: none;
        padding: 15px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        background-color: #f6f6f6;
        box-shadow: rgba(87, 87, 87, 0.288) 0px 7px 29px 0px;
        z-index: 11;
        @media screen and (max-width: 500px) {
          margin-bottom: 30px;
        }

        p {
          margin-bottom: 0px;
        }
      }

      h1 {
        font-family: "euclidMedium";
        pointer-events: none;
        font-size: 100px;
        margin-bottom: 40px;

        background: linear-gradient(180deg, #292929 10%, #919194 90%);
        background-size: 50% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media screen and (max-width: 750px) {
          background: #292929;
          color: #292929;
          background-size: 50% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        span {
          font-family: "euclidBold";
        }

        @media screen and (max-width: 1100px) {
          font-size: 80px;
        }
        @media screen and (max-width: 700px) {
          font-size: 70px;
          width: 80%;
        }
        @media screen and (max-width: 700px) {
          font-size: 60px;
          width: 95%;
        }
        @media screen and (max-width: 430px) {
          font-size: 55px;
          width: 95%;
        }
        @media screen and (max-width: 430px) {
          font-size: 55px;
          width: 100%;
        }
        @media screen and (max-width: 300px) {
          font-size: 45px;
          width: 100%;
        }
      }
    }
  }
  @keyframes animate {
    to {
      background-position: 90% center;
    }
  }
`;
export default Hero;
