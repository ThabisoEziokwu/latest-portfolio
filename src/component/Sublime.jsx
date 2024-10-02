import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Laptop from "./Laptop";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import UpReveal from "../utils/UpReveal";
import Distance from "../utils/Distance";
import PicCaro from "./PicCaro";
import CaroPic from "../assets/images/agentMeetBig.png";
import smallPicOne from "../assets/images/agentmeetGlass.jpg";
import smallPicTwo from "../assets/images/ageentMeetSmall.png";
import arrow from "../assets/images/arrowBlack-01.png";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// Imported pictured
import sublimeBg from '/sublimeBig.png'
import sublime2 from '/sublime2.png'
import sublime3 from '/sublime3.png'
import RevolvingLogo from "./RevolvingLogo";

function Sublime({ setprojectHeight }) {
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

  return (
    <Distance dist={setprojectHeight}>
      <Works ref={blockRef}>
        <div className="container-md cont">
          <Listing>
            <div className="line"></div>
          </Listing>
          <div className="row description-row">
            <div className="col-lg-7">
              <UpReveal threshold={0.5}>
                <ProjectName>
                  <img src={arrow} className="arrow" alt="img" />
                  Sublime
                </ProjectName>
              </UpReveal>
            </div>
            <div className="col-lg-5">
              <div className="project-description">
                <motion.div className="project-text">
                  <UpReveal threshold={0.5}>
                    <p className="description">
                      Developed a Dynamic Website for Sublime Designs and
                      Construction Associates Limited, Leveraging React for
                      Frontend Interactivity and Node.js with Express for
                      Backend Functionality.
                    </p>

                    <p className="stacks">
                      <span>Node</span>
                      <span>Express</span>
                      <span>React</span>
                      <span>Locomotive-Scroll</span>
                      <span>Nodemailer</span>
                    </p>
                    <div className="icons">
                      <Link
                        to={"https://github.com/topghostly/sublime-v3"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiGithubLine />
                      </Link>
                      <Link
                        to={"https://sublimeconstruct.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiExternalLinkLine />
                      </Link>
                    </div>
                  </UpReveal>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="carousel">
            <PicCaro
              bigPic={sublimeBg}
              smallPicOne={sublime2}
              smallPicTwo={sublime3}
            />
          </div>
          <div className="media-holder">
            <RevolvingLogoPicHolder>
              <img src={sublimeBg} alt="subline index image" className="big-image"/>
              <RevolvingLogo color={'white'} background={'none'}/>
            </RevolvingLogoPicHolder>
          <img src={sublime2} alt="subline index image" className="big-image"/>
          <img src={sublime3} alt="subline index image" className="big-image"/>
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

    img.big-image{
      position: relative;
      width: 1100px;
      border-radius: 20px;
      @media screen and (max-width: 1300px) {
    width: 1000px;
  }
  @media screen and (max-width: 1100px) {
    width: 900px;
  }
  @media screen and (max-width: 1050px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 1000px) {
    width: 700px;
  }
  @media screen and (max-width: 767px) {
    width: 700px;
    margin: 10px auto;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
    }
    .media-holder{
      display: flex;
      flex-direction: column;
      gap: 100px;
    }

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
            justify-content: start;
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
          @media screen and (max-width: 500px) {
            text-align: left;
            font-size: 15px;
            font-family: "euclidRegular";
          }
        }
        p.stacks {
          margin: 15px 0px;
          width: 100%;

          @media screen and (max-width: 991px) {
            justify-content: center;
          }
          @media screen and (max-width: 650px) {
            justify-content: start;
            gap: 20px;
          }

          span {
            font-family: "euclidLight";
            padding: 4px 10px;
            display: inline-block;
            border-radius: 50px;
            background-color: #f2f2f2;
            box-shadow: rgba(87, 87, 87, 0.2) 0px 7px 29px 0px;
            font-size: 13px;
            margin: 10px 15px 5px 0px;
            pointer-events: none;
            @media screen and (max-width: 500px) {
              font-size: 12px;
            }
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
    font-family: "euclidMedium";
    margin-bottom: 20px;
    justify-content: start;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.2em;
    margin-bottom: 30px;
    width: 95%;
  }

  @media screen and (max-width: 380px) {
    font-size: 2.2em;
    margin-bottom: 15px;
  }
  img.arrow {
    width: 15px;
    position: absolute;
    right: 40px;
    top: -20px;
    @media screen and (max-width: 1300px) {
      right: 0px;
    }
    @media screen and (max-width: 990px) {
      right: 40px;
    }
    @media screen and (max-width: 650px) {
      right: 0px;
      left: 220px;
      top: -20px;
      width: 12px;
    }
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

const RevolvingLogoPicHolder = styled.div`
  position: relative;
`
export default Sublime;
