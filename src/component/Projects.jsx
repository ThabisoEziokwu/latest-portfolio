import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollReveal from "../utils/ScrollReveal";
import Laptop from "./Laptop";
import phone from "../assets/images/imageRaftPhone.png";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import laptopImage from "../assets/images/agentMeet.png";

function Projects() {
  const [animation, setAnimation] = useState(false);
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

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.39, 0.44, 0.7, 0.74],
    [0, 0, 1, 1, 0]
  );
  const agentPhone = useTransform(scrollYProgress, [0, 1], [280, -280]);

  {
    /* Code for initiating the sliding amination */
  }
  const animate = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.39 ? "start" : "wait";
  });
  document.addEventListener("scroll", () => {
    if (animate.current === "start") {
      setAnimation(true);
    }
  });

  {
    /* Code for initiating the sliding amination */
  }
  return (
    <Works ref={blockRef}>
      <div className="container-sm cont">
        <Head
          style={{
            opacity,
          }}
        >
          <span>Some things i&apos;ve built </span> 📂
        </Head>
        <div className="row">
          <div className="col-md-4 project-description">
            <motion.div
              style={{
                opacity,
              }}
              className="project-text"
            >
              <h2>
                <ScrollReveal startAnimation={animation}>
                  AgentMeet
                </ScrollReveal>
              </h2>

              <ScrollReveal startAnimation={animation}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  suscipit sunt dolorem, quam amet hic reprehenderit ratione
                  vitae saepe. Hic provident aut quasi repudiandae perferendis,
                  harum doloremque dolores odio ullam!
                </p>
              </ScrollReveal>
            </motion.div>
          </div>
          <div className="col-md-8 project-gif">
            <PhonePic
              src={phone}
              alt=""
              style={{
                y: agentPhone,
              }}
            />
            <Laptop backImage={laptopImage} />
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
  .cont {
    width: 100%;
    height: 100%;

    .project-description {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 85vh;

      .project-text {
        position: sticky;
        top: 30vh;
        h2 {
          margin-bottom: 30px;
          font-family: "euclidSemiBold";
          width: fit-content;
        }
        p {
          font-family: "euclidMedium";
        }
      }
    }
  }

  .project-gif {
    margin: 300px 0px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Head = styled.h1`
  font-family: "euclidSemiBold";
  font-size: 30px;
  margin-bottom: 20px;
  position: sticky;
  top: 100px;
  span {
    background: linear-gradient(90deg, #161616 20%, #5e5e63 70%);
    background-size: 100% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const PhonePic = styled(motion.img)`
  position: absolute;
  top: 130px;
  right: 0px;
  width: 200px;
  display: block;
  z-index: 3;
`;
export default Projects;
