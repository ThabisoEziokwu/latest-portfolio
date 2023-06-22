import { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

function PicCaro({ bigPic, smallPicOne, smallPicTwo }) {
  const picRef = useRef();
  useEffect(() => {
    if (picRef.current) {
      const fromTheTop = () => {
        const divContainer = picRef.current;
        const { top } = divContainer.getBoundingClientRect();
        const topDistanceNumber = top + pageYOffset;
        return topDistanceNumber;
      };
      const topDistanceNumber = fromTheTop();
      const handlePicResize = () => {
        const nviewportHeight = window.innerHeight;

        const scrollLevel =
          window.pageYOffset || document.documentElement.scrollTop;

        let scrollValue =
          ((topDistanceNumber - scrollLevel) / nviewportHeight - 1) * 200;

        // Make the scroll effect start when element enters the viewport a
        if (
          topDistanceNumber - scrollLevel < nviewportHeight + 100 &&
          scrollLevel - topDistanceNumber < nviewportHeight - 400
        ) {
          gsap.to(".picscreen", {
            backgroundPosition: `center ${scrollValue}px`,
            duration: 0.1,
          });
        }
      };
      document.addEventListener("scroll", handlePicResize);
    } else {
      return;
    }
  }, []);
  return (
    <Carosel ref={picRef}>
      <BigPic background={bigPic} className="picscreen" />
      <div className="smallPics">
        <SmallPic backgroundOne={smallPicOne} />
        <SmallPic backgroundOne={smallPicTwo} />
      </div>
    </Carosel>
  );
}
const Carosel = styled.div`
  width: 90vw;
  pointer-events: none;
  height: 90vw;
  margin: 0px auto;
  z-index: 10;
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
  }
  .smallPics {
    position: relative;
    width: 100%;
    height: 38%;
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
  }
`;
const BigPic = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  /* background-position: center 0px; */
  border-radius: 10px;
`;
const SmallPic = styled.div`
  width: 49%;
  height: 100%;
  background-color: aquamarine;
  background-image: url(${(props) => props.backgroundOne});
  background-size: cover;
  border-radius: 10px;
  /* background-position: center 0px; */
`;
export default PicCaro;
