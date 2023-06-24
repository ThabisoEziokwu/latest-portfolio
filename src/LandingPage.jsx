import styled from "styled-components";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import AgentMeet from "./component/AgentMeet";
import ImageRaft from "./component/ImageRaft";
import Billette from "./component/Billette";
import SideNav from "./component/SideNav";
import Footer from "./component/Footer";
import SpinningText from "./component/SpinningText";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LandingPage() {
  useEffect(() => {});

  const [navFooter, setNavFooter] = useState(false);
  const [navAbout, setNavAbout] = useState(false);
  const [aboutHeight, setaboutHeight] = useState(0);
  const [projectHeight, setprojectHeight] = useState(0);
  const [contactHeight, setcontactHeight] = useState(0);
  const [showLogo, setShowLogo] = useState(true);
  return (
    <Page className="whole-page">
      <SideNav
        aboutHeight={aboutHeight}
        projectHeight={projectHeight}
        contactHeight={contactHeight}
        navFooter={navFooter}
        navAbout={navAbout}
      />
      <NavBar
        showLogo={showLogo}
        aboutHeight={aboutHeight}
        projectHeight={projectHeight}
      />
      <Hero />
      <Line>
        <div className="line"></div>
        <div className="spinning__container">
          <SpinningText />
        </div>
      </Line>
      <About setaboutHeight={setaboutHeight} setNavAbout={setNavAbout} />
      <div className="projects">
        <Head className="container-sm">
          <span>Some things i&apos;ve built </span> 📂
        </Head>
        <AgentMeet setprojectHeight={setprojectHeight} />
        <ImageRaft />
        <Billette />
      </div>
      <Footer
        setcontactHeight={setcontactHeight}
        setNavFooter={setNavFooter}
        setShowLogo={setShowLogo}
      />
      <CurtainIN
        initial={{ x: 0 }}
        animate={{
          top: "-115vh",
          transition: {
            // times: [0.2, 0.6, 1],
            duration: 0.2,
            delay: 0.6,
          },
        }}
      >
        <motion.p
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.3,
            },
          }}
        >
          HOME
        </motion.p>
      </CurtainIN>
      <CurtainOUT
        initial={{ x: 0 }}
        animate={{}}
        exit={{
          top: ["110vh", "0vh", "0vh"],

          transition: {
            times: [0.2, 0.6, 1],
            duration: 1.1,
          },
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{}}
          exit={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.75,
            },
          }}
        >
          CONTACT
        </motion.p>
      </CurtainOUT>
    </Page>
  );
}
const Page = styled.div`
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
  background: #f6f6f6;
`;

const Head = styled.h1`
  font-family: "euclidSemiBold";
  font-size: 30px;
  margin-bottom: 60px;
  margin-top: 100px;
  @media screen and (max-width: 750px) {
    margin-bottom: 40px;
    margin-top: 70px;
    font-size: 25px;
  }
  position: relative;
  span {
    background: linear-gradient(90deg, #161616 20%, #5e5e63 70%);
    background-size: 100% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const CurtainIN = styled(motion.div)`
  position: fixed;
  background-color: #292929;
  /* background-color: #d66565; */
  width: 100%;
  height: 110vh;
  top: 0;
  left: 0;
  z-index: 17;
  display: flex;
  justify-content: center;
  align-items: center;
  P {
    font-size: 35px;
    color: white;
    font-family: "euclidLight";
  }
`;
const CurtainOUT = styled(motion.div)`
  position: fixed;
  background-color: #292929;
  /* background-color: #d66565; */
  width: 100%;
  height: 110vh;
  top: -1;
  left: 0;
  z-index: 17;
  display: flex;
  justify-content: center;
  align-items: center;
  P {
    font-size: 35px;
    color: white;
    font-family: "euclidLight";
    opacity: 0;
  }
`;
const Line = styled.div`
  width: 100%;
  padding: 30px;
  position: relative;
  pointer-events: none;
  @media screen and (max-width: 750px) {
    display: none;
  }
  .spinning__container {
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: end;
    padding-right: 80px;
  }
  .line {
    height: 1px;
    width: 90%;
    margin: auto;
    background-color: #b1b1b1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export default LandingPage;
