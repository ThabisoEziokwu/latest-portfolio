import styled from "styled-components";
import backGround from "../assets/images/phonebackground.jpg";
import whiteLogo from "../assets/images/agentMeetLogoWhite.png";
import phone from "../assets/images/imageRaftPhone.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

function AgentPhone({ y }) {
  const phoneRef = useRef(null);

  useEffect(() => {
    const scrollEffect = () => {
      if (phoneRef.current) {
        const screenHeight = window.innerHeight;
        const { top } = phoneRef.current.getBoundingClientRect();
        const distance = top + pageYOffset;

        const phoneScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;

        let scroll = ((distance - phoneScrollPosition) / screenHeight - 1) * 80;

        if (
          distance - phoneScrollPosition < screenHeight + 500 &&
          phoneScrollPosition - distance < screenHeight
        ) {
          gsap.to(".phone-screen", {
            backgroundPosition: `center ${scroll}px`,
            duration: 0.6,
          });
        }
      }
      document.addEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <Phone
      ref={phoneRef}
      style={{
        y,
      }}
    >
      <Logo src={whiteLogo} />
      <Screen background={backGround} className="phone-screen" />
      <img src={phone} className="phone" />
    </Phone>
  );
}
const Phone = styled(motion.div)`
  position: relative;
  /* top: 130px;
  right: 0px; */
  width: 300px;
  z-index: 3;
  display: inline-block;
  pointer-events: none;
  @media screen and (max-width: 1300px) {
    width: 290px;
  }
  @media screen and (max-width: 1100px) {
    width: 270px;
  }
  @media screen and (max-width: 1000px) {
    width: 220px;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }

  img.phone {
    width: inherit;
  }
`;

const Screen = styled.div`
  position: absolute;
  bottom: 0;
  top: calc(100% / 32);
  bottom: calc(100% / 2.19);
  left: calc(100% / 8.7);
  right: calc(100% / 9.3);
  border-radius: calc(100% / 9.5);
  background-color: red;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center 0px;
`;

const Logo = styled.img`
  top: calc(100% / 25);
  width: calc(100% / 2.5);
  z-index: 4;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export default AgentPhone;
