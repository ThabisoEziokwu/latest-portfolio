import styled from "styled-components";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import UpReveal from "../utils/UpReveal";

function About() {
  const aboutRef = useRef();
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-1000, 4000]);
  return (
    <Intro ref={aboutRef}>
      <div className="container-sm a-c">
        <UpReveal threshold={0.7}>
          <div className="row cont">
            <div className="col-md-8">
              <div className="about-text">
                <div className="header">
                  <h2>About Me</h2>
                </div>
                <div className="body">
                  <p>
                    Hello and welcome to my portfolio! My name is Tope, and I am
                    a passionate programmer with a coding journey that beganin
                    2020, i have dedicated myself to mastering the art of
                    JavaScript development. My expertise lies in creating
                    dynamic web applications using the power of
                    javaScript&apos;s vast ecosystem.
                    <br />
                    In addition to my work in web development, I am also
                    studying Mechanical engineering at college. This unique
                    combination of skills allows me to bring a fresh perspective
                    to problem-solving. When I&apos;m not coding or studying,
                    you can find me playing video games.
                    <br />
                    Here are a few technologies i&apos;ve been working with
                    recently:
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </UpReveal>
      </div>
      <Floater>
        <motion.h1
          style={{
            x,
          }}
        >
          ABOUT ME
        </motion.h1>
      </Floater>
    </Intro>
  );
}
const Intro = styled.div`
  position: relative;
  z-index: 2;
  width: 1;
  height: 100vh;
  .a-c {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cont {
    background-color: #eceff1;
    width: 60vw;
    border-radius: 20px;
  }
  .about-text {
    padding: 45px;
    width: 90%;

    h2 {
      font-family: "euclidSemiBold";
      font-size: 30px;
      /* color: #5e5e63; */
      margin-bottom: 20px;
      background: linear-gradient(90deg, #161616 10%, #5e5e63 60%);
      background-size: 50% auto;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      color: #5e5e63;
      font-family: "euclidRegular";
      font-size: 15px;
    }
  }
`;
const Floater = styled.div`
  position: relative;
  h1 {
    position: fixed;
    top: 50vh;
    font-size: 110px;
    font-family: "euclidRegular";
    opacity: 0.1;
    z-index: -1;
  }
`;
export default About;
