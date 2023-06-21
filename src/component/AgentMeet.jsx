import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Laptop from "./Laptop";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import laptopImage from "../assets/images/agentMeet.png";
import AgentPhone from "./AgentPhone";
import Iphone from "./Iphone";
import UpReveal from "../utils/UpReveal";
import Distance from "../utils/Distance";
import PicCaro from "./PicCaro";
import CaroPic from "../assets/images/agentMeet.png";
import smallPicOne from "../assets/images/agentmeetGlass.jpg";
import smallPicTwo from "../assets/images/ageentMeetSmall.png";
import backG from "../assets/images/agentphone2.png";
import realPhone from "../assets/images/agentPhoneReal-01.png";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";
import { Link } from "react-router-dom";
function Projects({ setprojectHeight }) {
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
  const [ref, inView] = useInView({});
  useEffect(() => {
    if (inView) {
      return;
    }
  });
  return (
    <Distance dist={setprojectHeight}>
      <Works ref={blockRef}>
        <div className="container-md cont" ref={ref}>
          <Listing>
            <div className="line"></div>
          </Listing>
          <div className="row description-row">
            <div className="col-lg-7">
              <UpReveal threshold={0.5}>
                <ProjectName>AgentMeet</ProjectName>
              </UpReveal>
            </div>
            <div className="col-lg-5">
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
                      <span>JWT</span>
                    </p>
                    <div className="icons">
                      <Link
                        to={"https://github.com/topghostly/AgentMeet"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiGithubLine />
                      </Link>
                      <Link
                        to={"https://fragile-wear-frog.cyclic.app/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiExternalLinkLine t />
                      </Link>
                    </div>
                  </UpReveal>
                </motion.div>
              </div>
            </div>
          </div>
          <PicCaro
            bigPic={CaroPic}
            smallPicOne={smallPicOne}
            smallPicTwo={smallPicTwo}
          />

          <Laptop backImage={laptopImage} animate={true} />
          <div className="phone-area">
            <AgentPhone y={null} />
            <IphoneIMG src={realPhone} />
          </div>
        </div>
      </Works>
    </Distance>
  );
}
const Works = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 5;
  background: #f6f6f6;
  padding-bottom: 200px;
  @media screen and (max-width: 1050px) {
    padding-bottom: 100px;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: 60px;
  }

  .description-row {
    margin-top: 50px;
    margin-bottom: 200px;
    @media screen and (max-width: 1050px) {
      margin-bottom: 100px;
    }

    @media screen and (max-width: 750px) {
      margin-bottom: 50px;
    }
  }
  .cont {
    width: 100%;
    height: 100%;

    .phone-area {
      margin-top: 200px;
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      pointer-events: none;
      @media screen and (max-width: 1050px) {
        margin-top: 100px;
      }
      @media screen and (max-width: 750px) {
        display: none;
      }
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

        .icons {
          display: flex;
          gap: 20px;
          @media screen and (max-width: 991px) {
            justify-content: center;
          }
          @media screen and (max-width: 650px) {
            justify-content: start;
            gap: 30px;
          }
          svg {
            font-size: 30px;
            color: #222222;
            transition: all 0.2s ease-in-out;
            :hover {
              color: #0e8fa3;
              transition: all 0.2s ease-in-out;
            }
          }
        }
        @media screen and (max-width: 500px) {
          width: 95%;
        }
        p.description {
          font-family: "euclidMedium";
          font-size: 20px;
          margin: 0px;

          @media screen and (max-width: 991px) {
            text-align: left;
            font-size: 18px;
          }
        }
        p.stacks {
          margin-top: 25px;
          width: 100%;
          display: flex;
          gap: 40px;
          @media screen and (max-width: 991px) {
            justify-content: center;
          }
          @media screen and (max-width: 650px) {
            justify-content: start;
            gap: 20px;
          }

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
  @media screen and (max-width: 991px) {
    margin-bottom: 100px;
  }
  @media screen and (max-width: 750px) {
  }
  @media screen and (max-width: 650px) {
    width: 80%;
    margin: 0px auto;
    font-size: 2.2em;
    font-family: "euclidSemiBold";
    margin-bottom: 20px;
    justify-content: start;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.2em;
    margin-bottom: 40px;
    width: 95%;
  }

  @media screen and (max-width: 380px) {
    font-size: 2.2em;
    margin-bottom: 30px;
  }
`;
const Listing = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 70px;
  padding: 30px;
  @media screen and (max-width: 750px) {
    padding: 20px;
  }
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
const IphoneIMG = styled.img`
  position: relative;
  width: 275px;
  z-index: 3;
  display: inline-block;
  pointer-events: none;
  @media screen and (max-width: 1300px) {
    width: 265px;
  }
  @media screen and (max-width: 1100px) {
    width: 245px;
  }
  @media screen and (max-width: 1000px) {
    width: 195px;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
export default Projects;
