import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Ipad from "./Ipad";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import tabImage from "../assets/images/imageRaftTab.jpg";
import raftHeader from "../assets/images/imageRaftHeader.png";
import Iphone from "./Iphone";
import PhoneIMG from "../assets/images/imageRaftPhone.jpg";
import UpReveal from "../utils/UpReveal";
import PicCaro from "./PicCaro";
import BigPic from "../assets/images/imageRaftTab.jpg";
import smallPicOne from "../assets/images/imageRaftSmall.png";
import smallPicTwo from "../assets/images/imageRaftSmallTwo.png";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Projects() {
  // const [animation, setAnimation] = useState(false);
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
  return (
    <Works ref={blockRef}>
      <div className="container-sm cont">
        <Listing>
          <div className="line"></div>
        </Listing>
        <div className="row description-row">
          <div className="col-lg-7">
            <UpReveal threshold={0.5}>
              <ProjectName>imageRaft</ProjectName>
            </UpReveal>
          </div>
          <div className="col-lg-5">
            <div className="project-description">
              <motion.div className="project-text">
                <UpReveal threshold={0.5}>
                  <p className="description">
                    Having learnt about how APIs work, I built a with React.js
                    that integrates the Pixel API for accessing and downloading
                    photos. It features search and filter options to refine
                    image results based on keywords, color and type.
                  </p>

                  <p className="stacks">
                    <span>React</span>
                    <span>Pixels APi</span>
                    <span>Styled Components</span>
                    <span>Framer Motion</span>
                  </p>
                  <div className="icons">
                    <Link
                      to={"https://github.com/topghostly/imageraft-site"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiGithubLine />
                    </Link>
                    <Link
                      to={"https://topghostly.github.io/imageraft-site"}
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
        <div className="new">
          <PicCaro
            bigPic={BigPic}
            smallPicOne={smallPicOne}
            smallPicTwo={smallPicTwo}
          />
        </div>
        <div className="container m-200">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <Ipad backImg={tabImage} header={raftHeader} />
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="phone-area">
                <Iphone backGround={PhoneIMG} />
              </div>
            </div>
          </div>
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
  @media screen and (max-width: 750px) {
    padding-bottom: 50px;
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

    .new {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .m-200 {
      padding-bottom: 200px;

      @media screen and (max-width: 1050px) {
        padding-bottom: 100px;
      }
      @media screen and (max-width: 750px) {
        display: none;
      }
    }

    .phone-area {
      margin: auto;
      height: 100%;
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: end;

      @media screen and (max-width: 991px) {
        margin-top: 70px;
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
        width: 80%;
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
          gap: 25px;
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
    width: 80%;
    margin: 0px auto;
    justify-content: start;
    font-family: "euclidSemiBold";
    margin-bottom: 20px;
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

  .line {
    height: 1px;
    width: 100%;
    background-color: #b1b1b1;
  }
`;
export default Projects;
