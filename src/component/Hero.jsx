import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";

function Hero() {
  const topLevel = 0;
  const handleScroll = () => {
    const currentScrollposition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollposition - topLevel > 100) {
      gsap.to(".hero-text", {
        opacity: 0,
      });
    } else {
      gsap.to(".hero-text", {
        opacity: 1,
      });
    }
  };
  document.addEventListener("scroll", handleScroll);
  const heroRef = useRef();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["end end", "end start"],
  });
  const y_para = useTransform(scrollYProgress, [0, 0.2], [0, -300]);
  const y_head = useTransform(scrollYProgress, [0, 0.35], [0, -300]);

  return (
    <ViewPort ref={heroRef}>
      <div className="container-md">
        <div className="flex-cont">
          <div className="hero-text">
            <motion.p
              style={{
                y: y_para,
              }}
            >
              Build. Design. Improve 🔥
            </motion.p>
            <motion.h1
              style={{
                y: y_head,
              }}
            >
              I transform ideas into visually striking web solution.
            </motion.h1>
            <motion.div>
              <Button>Let&apos;s do this</Button>
            </motion.div>
          </div>
        </div>
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
  z-index: 2;

  .flex-cont {
    .hero-text {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      /* p {
        color: #131313;
      } */

      h1 {
        font-family: "euclidBold";
        width: 900px;
        font-size: 60px;
        margin-bottom: 40px;

        background: linear-gradient(180deg, #161616 10%, #5e5e63 90%);
        background-size: 50% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /* animation: animate 10s linear infinite; */
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
