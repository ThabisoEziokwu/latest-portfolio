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
  const sideNavTL = gsap.timeline();
  const sideNavTL2 = gsap.timeline();

  useEffect(() => {
    if (navClick) {
      sideNavTL.to(".background", {
        width: "35vw",
        height: "100vh",
        duration: 0.4,
        ease: "Back.easeOut",
      });
      sideNavTL.to(
        ".background",
        {
          borderRadius: "0px",
          duration: 0.7,
        },
        ">-0.3"
      );
      gsap.to(".one", {
        duration: 0.3,
        transform: "rotate(45deg) translate(2px, 1px)",
      });
      gsap.to(".two", {
        duration: 0.3,
        transform: "rotate(-45deg) translate(2px, -1px)",
      });
    } else {
      sideNavTL2.to(".background", {
        borderRadius: "60%",
        width: "200px",
        duration: 0.4,
      });
      sideNavTL2.to(".background", { scale: 1, duration: 0.4 }, ">-0.2");

      sideNavTL.to(".one", {
        duration: 0.3,
        transform: "rotate(0deg) translate(0px, 0px)",
      });
      sideNavTL.to(".two", {
        duration: 0.3,
        transform: "rotate(0deg) translate(0px, 0px)",
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
        delay: 0.5,
      });
    }
    // } else {
    //   tl2.to(".hamburger", {
    //     opacity: 0,
    //     transition: 0.005,
    //     pointerEvents: "none",
    //   });
    //   tl2.to([".link a", ".resume"], {
    //     y: 0,
    //     opacity: 1,
    //     transition: 0.1,
    //     stagger: 0.08,
    //     pointerEvents: "all",
    //   });
    // }
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
        <SideNav>
          <div className="background"></div>
        </SideNav>
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
              y: -5,
            }}
            className="link"
          >
            <a href="#"> ABOUT</a>
          </motion.div>
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="link"
          >
            <a href="#"> WORK</a>
          </motion.div>
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="link"
          >
            <a href="#"> CONTACT</a>
          </motion.div>
        </motion.div>
        <div className="resume">
          <Button>Resume</Button>
        </div>
        <Hamburger className="hamburger" onClick={() => setnavClick(!navClick)}>
          <div className="line one"></div>
          <div className="line two"></div>
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
      font-family: "euclidMedium";
      font-size: 14px;
      color: black;
      margin: 0px;
      font-size: 18px;
      font-family: "euclidSemiBold";
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
      font-family: "euclidRegular";
      font-size: 10px;
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
  height: 50px;
  width: 50px;
  background-color: #1b1b1b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  right: 100px;
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  scale: 0;
  transform-origin: center;

  .line {
    width: 35%;
    height: 2px;
    background-color: white;
  }
`;
const SideNav = styled.div`
  position: fixed;
  right: -210px;
  top: 50%;
  transform: translateY(-50%);

  .background {
    width: 200px;
    height: 200px;
    background-color: #1b1b1b;
    border-radius: 10%;
  }
`;
export default NavBar;
