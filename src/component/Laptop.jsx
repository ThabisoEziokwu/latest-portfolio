import styled from "styled-components";
import macbook from "../assets/images/macBook.png";
import notch from "../assets/images/macbookNotch.png";
import { useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import gsap from "gsap";

function Laptop({ backImage, animate }) {
  const lapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lapRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.4, 1],
    [1.3, 1.3, 1, 1]
  );

  useEffect(() => {
    if (lapRef.current) {
      const distFromTop = () => {
        const divContainer = lapRef.current;
        const { top } = divContainer.getBoundingClientRect();
        const distanceFromTop = top + pageYOffset;
        return distanceFromTop;
      };
      const distanceFromTop = distFromTop();
      const handleResize = () => {
        const viewportHeight = window.innerHeight;

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
            duration: 0.3,
          });
        }
      };
      setInterval(() => {
        document.addEventListener("scroll", handleResize);
      }, 2000);
    }
  }, []);
  return (
    <Lap
      ref={lapRef}
      style={{
        scale: animate ? scale : "1",
      }}
    >
      <Notch src={notch} alt="img" />
      <Screen background={backImage} className="screen" />
      <MainImg src={macbook} alt="laptopImage" />
    </Lap>
  );
}
const Lap = styled(motion.div)`
  margin: 100px auto;
  position: relative;
  z-index: 0;
  width: 1100px;
  transform-origin: top;
  pointer-events: none;
  @media screen and (max-width: 1300px) {
    width: 1000px;
  }
  @media screen and (max-width: 1100px) {
    width: 900px;
  }
  @media screen and (max-width: 1050px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 1000px) {
    width: 700px;
  }
  @media screen and (max-width: 767px) {
    width: 700px;
    margin: 10px auto;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const MainImg = styled.img`
  width: inherit;
`;
const Screen = styled.div`
  position: absolute;
  border-radius: 6px 6px 0px 0px;
  bottom: 0;
  top: calc(100% / 42);
  bottom: calc(100% / 8.4);
  left: calc(100% / 10.6);
  right: calc(100% / 10.6);
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center 0px;
`;
const Notch = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% / 8);
  top: 1px;
  z-index: 4;
`;
export default Laptop;
