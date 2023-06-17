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
  const [ref, inView] = useInView({});
  useEffect(() => {
    if (inView) {
      return;
    }
  });

  return (
    <Works ref={blockRef}>
      <div className="container cont" ref={ref}>
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

        <div className="new">
          <PicCaro
            bigPic={BigPic}
            smallPicOne={smallPicOne}
            smallPicTwo={smallPicTwo}
          />
          <Laptop backImage={laptopBackground} animate={false} />
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

    .new {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .phone-area {
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
        @media screen and (max-width: 500px) {
          width: 95%;
        }
        p.description {
          font-family: "euclidMedium";
          font-size: 20px;
          margin: 0px;
          @media screen and (max-width: 991px) {
            text-align: center;
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
  @media screen and (max-width: 650px) {
    font-size: 2em;
    font-family: "euclidSemiBold";
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 2em;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 380px) {
    font-size: 2em;
    margin-bottom: 40px;
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
export default Projects;
