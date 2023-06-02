import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Laptop from "./Laptop";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import laptopImage from "../assets/images/agentMeet.png";
import AgentPhone from "./AgentPhone";
import Iphone from "./Iphone";
import UpReveal from "../utils/UpReveal";

function Projects() {
  const blockRef = useRef();
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"],
  });
  document.addEventListener("scroll", () => {
    if (scrollYProgress == 0.35) {
      console.log("It works");
    }
  });
  const agentPhone = useTransform(scrollYProgress, [0, 1], [500, -400]);

  {
    /* Code for initiating the sliding amination */
  }
  // const animate = useTransform(scrollYProgress, (pos) => {
  //   return pos >= 0.39 ? "start" : "wait";
  // });
  // document.addEventListener("scroll", () => {
  //   if (animate.current === "start") {
  //     setAnimation(true);
  //   }
  // });

  {
    /* Code for initiating the sliding amination */
  }

  return (
    <Works ref={blockRef}>
      <div className="container-sm cont">
        <Listing>
          <div className="number">
            <h4>1</h4>
          </div>
          <div className="line"></div>
        </Listing>
        <div className="row description-row">
          <div className="col-md-7">
            <UpReveal threshold={0.5}>
              <ProjectName>AgentMeet</ProjectName>
            </UpReveal>
          </div>
          <div className="col-md-5">
            <div className="project-description">
              <motion.div className="project-text">
                <UpReveal threshold={0.5}>
                  <p className="description">
                    A web app built with Node.js and Express, allows users to
                    effortlessly post, manage, and rent out hostels. This
                    platform enebles seamless CRUD operations, providing a
                    user-friendly and intuitive experience.
                  </p>

                  <p className="stacks">
                    <span>Node</span>
                    <span>Express</span>
                    <span>EJS</span>
                    <span>Firebase</span>
                  </p>
                </UpReveal>
              </motion.div>
            </div>
          </div>
        </div>

        <Laptop backImage={laptopImage} animate={true} />
        <div className="phone-area">
          <AgentPhone y={null} />
          <Iphone y={null} />
        </div>
      </div>
    </Works>
  );
}
const Works = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 2;

  .description-row {
    margin-top: 50px;
    margin-bottom: 200px;
  }
  .cont {
    width: 100%;
    height: 100%;

    .phone-area {
      margin: 200px auto;
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
    }

    .project-description {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .project-text {
        width: 80%;
        p.description {
          font-family: "euclidMedium";
          font-size: 20px;
          margin: 0px;
        }
        p.stacks {
          margin-top: 25px;
          width: 100%;
          display: flex;
          gap: 40px;
          span {
            font-family: "euclidRegular";
            font-size: 14px;
            color: #5e5e63;
            /* color: #0e8fa3; */
          }
        }
      }
    }
  }
`;

const ProjectName = styled.h1`
  position: relative;
  font-size: 6em;
  height: 100%;
  font-family: "euclidRegular";
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;
const Listing = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 70px;
  padding: 30px;
  .number {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: solid 2px #b1b1b1;

    h4 {
      margin: 0px;
      color: #b1b1b1;
      font-family: "euclidRegular";
    }
  }
  .line {
    height: 1px;
    width: 100%;
    background-color: #b1b1b1;
  }
`;
export default Projects;
