import styled from "styled-components";
// import Hamburger from "./Hamburger";\
import logo from "../assets/images/portfolioLogo-01.png";
import Button from "./Button";
import { motion } from "framer-motion";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { IoIosDownload } from "react-icons/io";

function NavBar() {
  const topPos = 0;

  const handleScroll = () => {
    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPos - topPos > 250) {
      gsap.to(".link a", {
        y: -10,
        opacity: 0,
        transition: 0.1,
        stagger: 0.08,
        ease: null,
      });
    } else {
      gsap.to(".link", {
        y: 0,
        opacity: 1,
        transition: 0.1,
        stagger: 0.08,
        ease: null,
      });
    }
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
        <div className="name">
          {/* <p>Abolaji Temitope</p> */}
          <Logo src={logo} alt="" />
          {/* <Hamburger /> */}
        </div>
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
    p {
      font-family: "euclidMedium";
      font-size: 14px;
      color: black;
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
const Logo = styled.img`
  width: 32px;
`;
export default NavBar;
