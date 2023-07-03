import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/images/portfolioLogoGrey.png";

const CircularText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const textElements = container.querySelectorAll(".char");

    const totalChars = text.length;
    const angle = (2 * Math.PI) / totalChars;

    textElements.forEach((char, index) => {
      char.style.transform = `rotate(${index * angle}rad)`;
    });
  }, [text]);

  return (
    <Container ref={containerRef}>
      <img src={logo} alt="img" />
      <div className="text">
        {text.split("").map((char, index) => (
          <Char key={index} className="char">
            {char}
          </Char>
        ))}
      </div>
    </Container>
  );
};

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #f6f6f6;
  position: relative;

  ::before {
    content: "";
    width: 120%;
    height: 120%;
    border-radius: 50%;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: solid 1px #f6f6f6;
  }

  img {
    width: 25px;
  }

  .text {
    width: 100%;
    height: 100%;
    position: absolute;
    color: #bebebe;
    animation: ${rotateAnimation} 12s linear infinite;
    display: flex;
  }
`;

const Char = styled.span`
  font-family: "euclidRegular";
  position: absolute;
  left: 50%;
  font-size: 10px;
  transform-origin: 0 45px;
`;

export default CircularText;
