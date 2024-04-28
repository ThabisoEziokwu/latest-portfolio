import styled from "styled-components";
import backGround from "../assets/images/phonebackground.jpg";
import whiteLogo from "../assets/images/agentMeetLogoWhite.png";
import phone from "../assets/images/imageRaftPhone.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

function AgentPhone({ y }) {
  const phoneRef = useRef(null);
  const iphoneScreenRef = useRef(null);

  useEffect(() => {
    if (phoneRef.current) {
      const Top = () => {
        const { top } = phoneRef.current.getBoundingClientRect();
        const distancee = top + pageYOffset;
        return distancee;
      };
      const distances = Top();
      const scrollEffect = () => {
        const screenHeight = window.innerHeight;

        const phoneScrollPosition2 =
          window.pageYOffset || document.documentElement.scrollTop;

        let scroll2 =
          ((distances - phoneScrollPosition2) / screenHeight - 1) * 80;

        if (
          distances - phoneScrollPosition2 < screenHeight + 500 &&
          phoneScrollPosition2 - distances < screenHeight
        ) {
          gsap.to(iphoneScreenRef.current, {
            backgroundPosition: `center ${scroll2}px`,
            duration: 0.6,
          });
        }
      };
      document.addEventListener("scroll", scrollEffect);
    }
  }, []);
  return (
    <Phone
      ref={phoneRef}
      style={{
        y,
      }}
    >
      <Logo src={whiteLogo} alt="img" />
      <Screen background={backGround} ref={iphoneScreenRef} />
      <img src={phone} className="phone" alt="img" />
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
