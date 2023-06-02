import styled from "styled-components";
import logo from "../assets/images/portfolioLogo-01.png";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
// import { IoIosDownload } from "react-icons/io";

function NavBar() {
  const [navClick, setnavClick] = useState(false);

  useEffect(() => {
    if (navClick) {
      gsap.to(".background", {
        duration: 0.6,
        right: "0px",
        ease: "cubic-bezier(0.23, 1, 0.32, 1)",
      });
      gsap.to(".hamburger", {
        backgroundColor: "#5e5e63",
        delay: 0.2,
      });
      gsap.to(".hover", {
        top: "0px",
        duration: 0.2,
        ease: "cubic-bezier(0.23, 1, 0.32, 1)",
      });
    } else {
      gsap.to(".background", {
        right: "-400px",
        duration: 0.6,
        ease: "cubic-bezier(0.23, 1, 0.32, 1)",
      });
      gsap.to(".hamburger", {
        backgroundColor: "#1b1b1b",
        duration: 0.3,
      });
      gsap.to(".hover", {
        top: "105%",
        duration: 0.2,
        ease: "cubic-bezier(0.23, 1, 0.32, 1)",
      });
    }
  });
  const handleScroll = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.4 } });

    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPos > 120) {
      tl.to([".link a", ".resume"], {
        y: -10,
        opacity: 0,
        transition: 0.1,
        stagger: 0.08,
        pointerEvents: "none",
      });
      tl.to(".hamburger", {
        scale: 1,
        opacity: 1,
        transition: 0.005,
        pointerEvents: "all",
        cursor: "pointer",
        delay: 1.6,
      });
    }
  };
  const logoGo = useAnimation();
  const nameCome = useAnimation();
  const handleLogohover = () => {
    logoGo.start({
      x: -40,
      opacity: 0,
      transition: {
        delay: 0.09,
      },
    });
    nameCome.start({
      x: -60,
      opacity: 1,
    });
  };
  const handleLogoReturn = () => {
    logoGo.start({
      x: 0,
      opacity: 1,
    });
    nameCome.start({
      x: 150,
      opacity: 1,
    });
  };
  document.addEventListener("scroll", handleScroll);

  return (
    <div
      className="container"
      style={{
        position: "fixed",
        zIndex: 99,
        maxWidth: "100vw",
        marginLeft: "-20px",
      }}
    >
      <Nav>
        <motion.div
          onMouseEnter={() => handleLogohover()}
          onMouseLeave={() => handleLogoReturn()}
          className="name"
        >
          <Logo
            src={logo}
            alt=""
            initial={{
              opacity: 1,
              x: 0,
            }}
            animate={logoGo}
          />
          <motion.p
            initial={{
              opacity: 0,
              x: 0,
            }}
            animate={nameCome}
          >
            Abolaji Temitope
          </motion.p>
        </motion.div>
        <motion.div
          initial={{
            y: 20,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            staggerChildren: 1,
          }}
          className="links"
        >
          <motion.div
            whileHover={{
              y: -10,
            }}
            className="link"
          >
            <a href="#"> ABOUT</a>
          </motion.div>
          <motion.div
            whileHover={{
              y: -10,
            }}
            className="link"
          >
            <a href="#"> WORK</a>
          </motion.div>
          <motion.div
            whileHover={{
              y: -10,
            }}
            className="link"
          >
            <a href="#"> CONTACT</a>
          </motion.div>
        </motion.div>
        <SideNav>
          <div className="background"></div>
        </SideNav>
        <div className="resume">
          <Button>Resume</Button>
        </div>

        <Hamburger className="hamburger" onClick={() => setnavClick(!navClick)}>
          <div className="line one"></div>
          <div className="line two"></div>
          <div className="hover"></div>
        </Hamburger>
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
  .space-block {
    width: 20vw;
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
  }
`;
const Logo = styled(motion.img)`
  width: 32px;
`;
const Hamburger = styled.div`
  z-index: 10;
  height: 70px;
  width: 70px;
  background-color: #1b1b1b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  right: 100px;
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  scale: 0;
  transform-origin: center;
  border: solid 0.5px #c7c7c7;
  overflow: hidden;

  .line {
    width: 35%;
    height: 2px;
    background-color: white;
  }
  .one {
    margin-top: 3px;
    margin-right: 0px;
    transition: all 0.2s ease-in-out;
  }
  .two {
    margin-left: 0px;
    transition: all 0.2s ease-in-out;
  }
  .hover {
    background-color: #5e5e63;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 105%;
    z-index: -1;
  }
  :hover {
    .one {
      margin-right: 10px;
      transition: all 0.2s ease-in-out;
    }
    .two {
      margin-left: 10px;
      transition: all 0.2s ease-in-out;
    }
  }
`;
const SideNav = styled.div`
  .background {
    position: fixed;
    width: 400px;
    top: 0;
    right: -400px;
    height: 100vh;
    background-color: #1b1b1b;
  }
`;
export default NavBar;
