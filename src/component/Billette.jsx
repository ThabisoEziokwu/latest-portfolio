import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Ipad from "./Ipad";
import Laptop from "./Laptop";
import laptopBackground from "../assets/images/billetteLaptop.jpg";
import tabBackground from "../assets/images/billette.jpg";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PicCaro from "./PicCaro";
import BigPic from "../assets/images/billette.jpg";
import smallPicOne from "../assets/images/billetteSmall.png";
import smallPicTwo from "../assets/images/billetteSmallTwo.png";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import UpReveal from "../utils/UpReveal";
import laptopPic from "../assets/images/billetteLaptop.png";
import gsap from "gsap";

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
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      gsap.to(".carol", {
        opacity: 1,
      });
    }
    if (!inView) {
      gsap.to(".carol", {
        opacity: 0,
      });
    }
  });

  return (
    <Works ref={blockRef}>
      <div className="container-md cont" ref={ref}>
        <Listing>
          <div className="line"></div>
        </Listing>
        <div className="row description-row">
          <div className="col-lg-7">
            <UpReveal threshold={0.5}>
              <ProjectName>Billette</ProjectName>
            </UpReveal>
          </div>
          <div className="col-lg-5">
            <div className="project-description">
              <motion.div className="project-text">
                <UpReveal threshold={0.5}>
                  <p className="description">
                    Created a responsive online ticket sale website with react
                    and framer motion for cool animations.
                  </p>

                  <p className="stacks">
                    <span>React</span>
                    <span>GSAP</span>
                    <span>Framer Motion</span>
                  </p>
                  <div className="icons">
                    <Link
                      to={"https://github.com/topghostly/billette"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiGithubLine />
                    </Link>
                    <Link
                      to={"https://topghostly.github.io/Billette/"}
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

        <div className="carol" ref={ref}>
          <PicCaro
            bigPic={BigPic}
            smallPicOne={smallPicOne}
            smallPicTwo={smallPicTwo}
          />
          {/* <Laptop backImage={laptopBackground} animate={false} /> */}
        </div>
        <div className="newp">
          <LapPic src={laptopPic} alt="rghepix" />
        </div>

        <div className="phone-area">
          <Ipad backImg={tabBackground} header={null} />
        </div>
      </div>
    </Works>
  );
}
const Works = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 5;
  background: #f6f6f6;
  padding-bottom: 200px;
  width: 100vw;
  @media screen and (max-width: 750px) {
    padding-bottom: 90px;
  }

  .description-row {
    margin-top: 50px;
    margin-bottom: 150px;
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

    .carol {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }
    .newp {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }

    .phone-area {
      pointer-events: none;
      margin-top: 100px;
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
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
            border-radius: 50px;
            display: inline-block;
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
  @media screen and (max-width: 650px) {
    font-size: 2.2em;
    font-family: "euclidMedium";
    width: 80%;
    margin: 0px auto;
    justify-content: start;
    margin-bottom: 20px;
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
`;
const Listing = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 70px;
  padding: 30px;

  .line {
    height: 1px;
    width: 100%;
    background-color: #b1b1b1;
  }
`;

const LapPic = styled.img`
  margin: 100px auto;
  position: relative;
  z-index: 0;
  width: 1100px;
  transform-origin: top;
  pointer-events: none;
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
`;
export default Projects;
