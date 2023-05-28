import styled from "styled-components";
import macbook from "../assets/images/macBook.png";
import notch from "../assets/images/macbookNotch.png";
import { useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import gsap from "gsap";

function Laptop({ backImage }) {
  const lapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lapRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.4, 1], [2, 2, 1, 1]);
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
    <Lap
      ref={lapRef}
      style={{
        scale,
      }}
    >
      <Notch src={notch} />
      <Screen background={backImage} className="screen" />
      <MainImg src={macbook} alt="laptopImage" />
    </Lap>
  );
}
const Lap = styled(motion.div)`
  margin: 100px auto;
  position: relative;
  z-index: 2;
  width: 1100px;
  transform-origin: top;
`;
const MainImg = styled.img`
  width: inherit;
`;
const Screen = styled.div`
  position: absolute;
  border-radius: 6px 6px 0px 0px;
  bottom: 0;
  top: calc(100% / 41);
  bottom: calc(100% / 8.2);
  left: calc(100% / 10.5);
  right: calc(100% / 10.5);
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
