import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import logo from "../assets/images/portfolioLogoGrey.png";
import { useRef } from "react";
function SpinningText() {
  const ref = useRef(null);
  const words = " ABOLAJI TOPE • WEB DEVELOPER • 3D ARTIST •";
  useEffect(() => {
    const containerRef = ref.current;
    const textElement = containerRef.querySelectorAll(".chara");

    const totalChars = words.length;
    const angle = (2 * Math.PI) / totalChars;

    textElement.forEach((chara, index) => {
      chara.style.transform = `rotate(${index * angle}rad)`;
    });
  }, [words]);
  return (
    <Spiner ref={ref}>
      <img src={logo} alt="" />
      <div className="text">
        {words.split("").map((char, index) => (
          <Char key={index} className="chara">
            {char}
          </Char>
        ))}
      </div>
    </Spiner>
  );
}
const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spiner = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  /* background-color: red; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;

  img {
    width: 50px;
  }
  .text {
    width: 100%;
    height: 100%;
    position: absolute;
    animation: ${Spin} 12s linear infinite;
    color: #bebebe;

    gap: 5px;

    span {
      font-family: "euclidMedium";
      position: absolute;
      left: 50%;
      font-size: 13px;
      transform-origin: 0 85px;
    }
  }
`;
const Char = styled.span`
  font-family: "euclidRegular";
  position: absolute;
  left: 50%;
  font-size: 9px;
  transform-origin: 0 85px;
`;

export default SpinningText;
