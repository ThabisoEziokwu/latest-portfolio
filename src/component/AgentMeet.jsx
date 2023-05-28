import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Laptop from "./Laptop";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import laptopImage from "../assets/images/agentMeet.png";
import AgentPhone from "./AgentPhone";

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
  const agentPhone = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const agentPhone2 = useTransform(scrollYProgress, [0, 1], [150, -140]);

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
        <Head>
          <span>Some things i&apos;ve built </span> 📂
        </Head>
        <div className="row description-row">
          <div className="col-md-7">
            <ProjectName>AgentMeet</ProjectName>
          </div>
          <div className="col-md-5">
            <div className="project-description">
              <motion.div className="project-text">
                <p className="description">
                  A web app built with Node.js and Express, allows users to
                  effortlessly post, manage, and rent out hostels. This platform
                  enebles seamless CRUD operations, providing a user-friendly
                  and intuitive experience.
                </p>
                <p className="stacks">
                  <span>Node</span>
                  <span>Express</span>
                  <span>EJS</span>
                  <span>Firebase</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <Laptop backImage={laptopImage} />
        <div className="phone-area">
          <AgentPhone y={agentPhone} />
          <AgentPhone y={agentPhone2} />
          <AgentPhone y={null} />
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
const Head = styled.h1`
  font-family: "euclidSemiBold";
  font-size: 30px;
  margin-bottom: 100px;
  position: relative;
  span {
    background: linear-gradient(90deg, #161616 20%, #5e5e63 70%);
    background-size: 100% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
export default Projects;
