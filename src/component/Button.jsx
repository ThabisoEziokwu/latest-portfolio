import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import "../index.css";
import backImg from "../assets/images/buttonBackground.png";

function Button({ children }) {
  return (
    <Press className="style-button" background={backImg}>
      <Para theContent={children}>{children}</Para>
    </Press>
  );
}
const buttonHover = keyframes`
    /* 0% {
      background-position: 10% 100%;
    }
    10% {
      background-position: 20% 100%;
    }
    20% {
      background-position: 30% 100%;
    }
    30% {
      background-position: 40% 100%;
    }
    40% {
      background-position: 50% 100%;
    }
    50% {
      background-position: 60% 100%;
    }
    60% {
      background-position: 70% 100%;
    }
    70% {
      background-position: 80% 100%;
    }
    80% {
      background-position: 80% 100%;
    }
    70% {
      background-position: 80% 100%;
    } */
    0%{
        background-position: 0% 100%;
    }
    50%{
        background-position: 100% 100%;
    }
    100%{
        background-position: 0% 100%;
    }
`;
const Press = styled(motion.button)`
  background: none;
  position: relative;
  padding: 6px 25px;
  color: #0e8fa3;
  border: solid 2px #0e8fa3;
  font-family: "euclidSemiBold";
  border-radius: 6px;
  z-index: 4;

  ::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.background});
    background-position: 100% 100%;
    background-repeat: repeat-x;
    background-size: cover;
    z-index: -1;
    border-radius: 6px;
    opacity: 0.7;
  }

  &:hover::before {
    animation: ${buttonHover} 3.2s ease-in-out infinite;
  }
`;

const Para = styled.p`
  margin: 0px;
  position: relative;
  ::before {
    content: "${(props) => props.theContent}";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 100%;
    z-index: -1;
    color: white;
  }
`;
export default Button;
