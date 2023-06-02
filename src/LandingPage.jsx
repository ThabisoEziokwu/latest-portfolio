import styled from "styled-components";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import AgentMeet from "./component/AgentMeet";
import ImageRaft from "./component/ImageRaft";
import Billette from "./component/Billette";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Footer from "./component/Footer";

function LandingPage() {
  const [footerBack, setFooterBack] = useState(false);

  useEffect(() => {
    if (footerBack) {
      gsap.to(".whole-page", {
        backgroundColor: "#1b1b1b",
        duration: 0.5,
      });
    } else {
      gsap.to(".whole-page", {
        backgroundColor: "#f6f6f6",
        duration: 0.5,
      });
    }
  });

  return (
    <Page className="whole-page">
      <NavBar />
      <Hero />
      <About />
      <div className="projects">
        <Head className="container-sm">
          <span>Some things i&apos;ve built </span> 📂
        </Head>
        <AgentMeet />
        <ImageRaft />
        <Billette />
      </div>
      <Footer changeBack={setFooterBack} />
    </Page>
  );
}
const Page = styled.div`
  position: relative;
  max-width: 100%;
  padding: 20px;
  background: #c7c7c7;
`;

const Head = styled.h1`
  font-family: "euclidSemiBold";
  font-size: 30px;
  margin-bottom: 60px;
  position: relative;
  span {
    background: linear-gradient(90deg, #161616 20%, #5e5e63 70%);
    background-size: 100% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export default LandingPage;
