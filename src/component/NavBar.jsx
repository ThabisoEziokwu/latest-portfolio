import styled from "styled-components";
import logo from "../assets/images/portfolioLogo-01.png";
import resume from "../assets/tope-resume.pdf";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Hamburger from "./Hamburger";
import { useEffect } from "react";
import gsap from "gsap";

function NavBar({ showLogo, aboutHeight, projectHeight }) {
  useEffect(() => {
    if (!showLogo) {
      gsap.to(".logo-cont", {
        opacity: 0,
      });
    } else {
      gsap.to(".logo-cont", {
        opacity: 1,
      });
    }
  });
  return (
    <div
      className="container whole-container"
      style={{
        position: "fixed",
        zIndex: 15,
        minWidth: "100vw",
      }}
    >
      <Nav>
        <motion.div
          className="logo-cont"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            delay: 6,
            duration: 0.4,
          }}
        >
          <Logo
            src={logo}
            alt="img"
            initial={{
              opacity: 1,
              x: 0,
            }}
          />
        </motion.div>

        <div className="social-media"></div>
        <motion.div
          className="resume"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            delay: 5.3,
            duration: 0.4,
          }}
        >
          {/* <Button>Resume</Button> */}
          <p>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Résume
            </a>
          </p>
        </motion.div>
        <Hamburger projectHeight={projectHeight} aboutHeight={aboutHeight} />
      </Nav>
    </div>
  );
}
const Nav = styled.div`
  padding: 0px 80px;
  background-color: none;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 600px) {
    padding: 0px 10px;
  }
  .name {
    overflow: hidden;
    position: relative;
    p {
      font-size: 14px;
      color: black;
      margin: 0px;
      font-size: 18px;
      font-family: "euclidBold";
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  button {
    font-size: 12px;
  }
  .links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    width: 27%;
    .link {
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      font-family: "euclidSemiBold";
      font-size: 15px;
      color: black;
      text-decoration: none;
    }
  }
  .resume {
    background-color: #f6f6f6;
    padding: 9px 30px;
    border-radius: 60px;
    box-shadow: rgba(87, 87, 87, 0.288) 0px 7px 29px 0px;
    transition: all 0.2s ease-in-out;

    :hover {
      /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
      box-shadow: rgba(0, 0, 0, 0.767) 0px 25px 40px -20px;
      transition: all 0.2s ease-in-out;
    }
    p {
      margin-bottom: 0px;
      font-family: "euclidSemiBold";
      font-size: 19px;

      a {
        color: #292929;
        text-decoration: none;
      }
    }
    @media screen and (max-width: 750px) {
      display: none;
    }
  }

  .logo-cont {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(87, 87, 87, 0.288) 0px 7px 29px 0px;
  }
`;
const Logo = styled(motion.img)`
  width: 25px;
`;

export default NavBar;
