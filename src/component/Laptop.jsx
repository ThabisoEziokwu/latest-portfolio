import styled from "styled-components";
import macbook from "../assets/images/macBook.png";
// BackGround image goes here
import { useRef, useEffect } from "react";
import gsap from "gsap";

function Laptop({ backImage }) {
  const lapRef = useRef(null);
  const handleResize = () => {
    const viewportHeight = window.innerHeight;
    const divContainer = lapRef.current;
    const { top } = divContainer.getBoundingClientRect();
    const distanceFromTop = top + pageYOffset;

    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    let theScroll =
      ((distanceFromTop - scrollPosition) / viewportHeight - 1) * 200;

    // Make the scroll effect start when element enters the viewport a
    if (
      distanceFromTop - scrollPosition < viewportHeight + 500 &&
      scrollPosition - distanceFromTop < viewportHeight
    ) {
      gsap.to(".screen", {
        backgroundPosition: `center ${theScroll}px`,
        duration: 1,
      });
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleResize);
  }, []);
  return (
    <Lap ref={lapRef}>
      <Screen background={backImage} className="screen"></Screen>
      <MainImg src={macbook} alt="laptopImage" />
    </Lap>
  );
}
const Lap = styled.div`
  position: relative;
  z-index: 2;
  width: 800px;
`;
const MainImg = styled.img`
  width: inherit;
`;
const Screen = styled.div`
  position: absolute;
  bottom: 0;
  top: calc(100% / 18.7692308);
  bottom: calc(100% / 10.2);
  left: calc(100% / 8.394);
  right: calc(100% / 9.13230682);
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center 0px;
`;
export default Laptop;
