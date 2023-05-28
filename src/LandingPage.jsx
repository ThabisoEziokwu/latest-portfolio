import styled from "styled-components";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/AgentMeet";
import ImageRaft from "./component/ImageRaft";
import { useEffect, useState } from "react";
import gsap from "gsap";

function LandingPage() {
  const [footerBack, setFooterBack] = useState(false);

  useEffect(() => {
    if (footerBack) {
      gsap.to(".whole-page", {
        backgroundColor: "#c7c7c7",
        duration: 0.8,
      });
    } else {
      gsap.to(".whole-page", {
        backgroundColor: "#f6f6f6",
        duration: 0.8,
      });
    }
  });

  return (
    <Page className="whole-page">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <ImageRaft />
      <div
        className="block"
        style={{
          height: "50vh",
        }}
      ></div>
    </Page>
  );
}
const Page = styled.div`
  position: relative;
  max-width: 100%;
  padding: 20px;
  background: #c7c7c7;
`;
export default LandingPage;
