import styled from "styled-components";
import ipad from "../assets/images/ipad.png";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import headerImg from "../assets/images/imageRaftHeader.png";

function Ipad({ backImg, header }) {
  const padRef = useRef(null);
  const handlePadResize = () => {
    const viewportHeight = window.innerHeight;
    const padContainer = padRef.current;
    const { top } = padContainer.getBoundingClientRect();
    const topDistance = top + pageYOffset;

    const padScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    let scrollMovement =
      ((topDistance - padScrollPosition) / viewportHeight - 1) * 200;

    // Make the scroll effect start when element enters the viewport
    if (
      topDistance - padScrollPosition < viewportHeight + 500 &&
      padScrollPosition - topDistance < viewportHeight
    ) {
      gsap.to(".tab-screen", {
        backgroundPosition: `center ${scrollMovement}px`,
        duration: 1.5,
      });
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handlePadResize);
  }, []);
  return (
    <Pad ref={padRef}>
      {header && <Nav src={headerImg} />}
      <TabScreen background={backImg} className="tab-screen" />
      <PadImg src={ipad} />
    </Pad>
  );
}
const Pad = styled.div`
  margin-top: 100px;
  position: relative;
  z-index: 2;
  width: 900px;
  margin: 0px auto;
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
