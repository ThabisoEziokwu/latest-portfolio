import styled from "styled-components";
import ipad from "../assets/images/ipad.png";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import headerImg from "../assets/images/imageRaftHeader.png";

function Ipad({ backImg, header }) {
  const padRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (padRef.current) {
        const topValue = () => {
          const padContainer = padRef.current;
          const { top } = padContainer.getBoundingClientRect();
          const topDistanceValue = top + pageYOffset;
          return topDistanceValue;
        };
        const topDistanceValue = topValue();
        const handlePadResize = () => {
          const viewportHeight = window.innerHeight;

          const padScrollPosition =
            window.pageYOffset || document.documentElement.scrollTop;

          let scrollMovement =
            ((topDistanceValue - padScrollPosition) / viewportHeight - 1) * 200;

          // Make the scroll effect start when element enters the viewport
          if (
            topDistanceValue - padScrollPosition < viewportHeight + 500 &&
            padScrollPosition - topDistanceValue < viewportHeight
          ) {
            gsap.to(".tab-screen", {
              backgroundPosition: `center ${scrollMovement}px`,
              duration: 0.5,
            });
          }
        };

        document.addEventListener("scroll", handlePadResize);
      }
    }, 2000);
  }, []);
  return (
    <Pad ref={padRef}>
      {header && <Nav src={headerImg} alt="img" />}
      <TabScreen background={backImg} className="tab-screen" />
      <PadImg src={ipad} alt="img" />
    </Pad>
  );
}
const Pad = styled.div`
  margin-top: 100px;
  position: relative;
  z-index: 2;
  width: 900px;
  margin: 0px auto;
  pointer-events: none;
  transform-origin: top;

  @media screen and (max-width: 1300px) {
    width: 760px;
  }
  @media screen and (max-width: 1100px) {
    width: 660px;
  }
  @media screen and (max-width: 1000px) {
    width: 500px;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const PadImg = styled.img`
  width: inherit;
`;
const TabScreen = styled.div`
  position: absolute;
  top: calc(100% / 24);
  bottom: calc(100% / 24);
  left: calc(100% / 35);
  right: calc(100% / 35);
  border-radius: 10px;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center 0px;
`;
const Nav = styled.img`
  top: calc(100% / 24);
  width: calc(100% - 70px);
  z-index: 4;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export default Ipad;
