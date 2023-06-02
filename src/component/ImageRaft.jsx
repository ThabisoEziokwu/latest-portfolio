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
          <div className="number">
            <h4>2</h4>
          </div>
          <div className="line"></div>
        </Listing>
        <div className="row description-row">
          <div className="col-md-7">
            <UpReveal threshold={0.5}>
              <ProjectName>imageRaft</ProjectName>
            </UpReveal>
          </div>
          <div className="col-md-5">
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
                </UpReveal>
              </motion.div>
            </div>
          </div>
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
  z-index: 2;

  .description-row {
    margin-top: 50px;
    margin-bottom: 200px;
  }
  .cont {
    width: 100%;
    height: 100%;
    .m-200 {
      margin-bottom: 200px;
    }

    .phone-area {
      margin: auto;
      height: 100%;
      display: flex;
      width: 100%;
      justify-content: center;
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
