import styled from "styled-components";
import gsap from "gsap";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
function SideNav({
  aboutHeight,
  projectHeight,
  contactHeight,
  navFooter,
  navAbout,
}) {
  const [visivle, setVisible] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    gsap.set(".link", {
      x: -100,
    });
    gsap.to(".link", {
      delay: 3.5,
      x: 0,
      stagger: 0.2,
    });
  }, []);
  const pointAnimation = useAnimation();
  const letterAnimation = useAnimation();
  const pointAnimation2 = useAnimation();
  const letterAnimation2 = useAnimation();
  const pointAnimation3 = useAnimation();
  const letterAnimation3 = useAnimation();

  useEffect(() => {
    if (active === 1 && active !== 2 && active !== 3) {
      pointAnimation.start({
        transition: {
          delay: 0.3,
          times: [0.2, 0.9, 1],
          duration: 0.7,
        },
        opacity: 1,
        x: [-300, 30, 30, 0],
        y: "-50%",
      });

      letterAnimation.start({
        transition: {
          delay: 0.4,
          duration: 0.4,
          times: [0, 0.1, 0.9, 1],
        },
        opacity: 1,
        x: [0, 20, 20, 0],
      });
    }

    if (active === 2 && active !== 1 && active !== 3) {
      pointAnimation2.start({
        transition: {
          delay: 0.3,
          times: [0.2, 0.9, 1],
          duration: 0.7,
        },
        opacity: 1,
        x: [-300, 30, 30, 0],
        y: "-50%",
      });

      letterAnimation2.start({
        transition: {
          delay: 0.4,
          duration: 0.4,
          times: [0, 0.1, 0.9, 1],
        },
        opacity: 1,
        x: [0, 20, 20, 0],
      });
    }
    if (active === 3 && active !== 2 && active !== 1) {
      pointAnimation3.start({
        transition: {
          delay: 0.3,
          times: [0.2, 0.9, 1],
          duration: 0.7,
        },
        opacity: 1,
        x: [-300, 30, 30, 0],
        y: "-50%",
      });

      letterAnimation3.start({
        transition: {
          delay: 0.4,
          duration: 0.4,
          times: [0, 0.1, 0.9, 1],
        },
        opacity: 1,
        x: [0, 20, 20, 0],
      });
    }
  }, [
    active,
    pointAnimation,
    pointAnimation2,
    pointAnimation3,
    letterAnimation,
    letterAnimation2,
    letterAnimation3,
  ]);
  const toAbout = () => {
    window.scrollTo(0, aboutHeight);
  };
  const toProjects = () => {
    window.scrollTo(0, projectHeight);
  };
  const screenHeight = window.innerHeight;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollRef =
        (window.pageYOffset || document.documentElement.scrollTop) +
        screenHeight;
      if (
        scrollRef > aboutHeight &&
        scrollRef > projectHeight &&
        scrollRef > contactHeight
      ) {
        setActive(0);
      }
      if (scrollRef > aboutHeight && scrollRef < projectHeight) {
        setActive(1);
      } else if (scrollRef > projectHeight && scrollRef < contactHeight) {
        setActive(2);
      } else if (scrollRef > contactHeight) {
        setActive(3);
      } else {
        setActive(0);
      }
    });
  });
  return (
    <Side navFooter={navFooter} navAbout={navAbout}>
      <div className="about link">
        <AnimatePresence>
          {visivle && active === 1 && (
            <Point
              initial={{
                x: -300,
                y: "-50%",
                opacity: 1,
              }}
              animate={pointAnimation}
              exit={{
                x: -300,
              }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        <motion.p
          initial={{
            x: 0,
            opacity: 1,
          }}
          animate={letterAnimation}
          onClick={() => {
            toAbout();
          }}
        >
          ABOUT
        </motion.p>
      </div>
      <div className="project link">
        <AnimatePresence>
          {visivle && active === 2 && (
            <Point
              initial={{
                x: -300,
                y: "-50%",
                opacity: 1,
              }}
              animate={pointAnimation2}
              exit={{
                x: -300,
              }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        <motion.p
          initial={{
            x: 0,
            opacity: 1,
          }}
          animate={letterAnimation2}
          onClick={() => {
            toProjects();
          }}
        >
          PROJECTS
        </motion.p>
      </div>
      <div className="contact link">
        <AnimatePresence>
          {visivle && active === 3 && (
            <Point
              initial={{
                x: -300,
                y: "-50%",
                opacity: 1,
              }}
              animate={pointAnimation3}
              exit={{
                x: -300,
              }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        <motion.p
          initial={{
            x: 0,
            opacity: 1,
          }}
          animate={letterAnimation3}
        >
          <LinkOut to={"/contact"} navabout={navAbout} navfooter={navFooter}>
            CONTACT
          </LinkOut>
        </motion.p>
      </div>
    </Side>
  );
}
const LinkOut = styled(Link)`
  color: ${(props) => (props.navfooter ? "#ffffff" : "#212529")};

  text-decoration: none;
  :hover {
    color: #0e8fa3;
    transition: all 0.2s ease-in-out;
  }
`;
const Side = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  transform: translateY(-50%);
  top: 50%;
  left: 0;
  width: 50px;
  gap: 30px;
  z-index: 10;
  /* margin: 10px;
  padding: 15px 15px;
  border-radius: 50px;
  box-shadow: ${(props) =>
    props.navAbout || props.navFooter
      ? "none"
      : "rgba(87, 87, 87, 0.288) 0px 7px 29px 0px"}; */

  @media screen and (max-width: 750px) {
    display: none;
  }

  p {
    writing-mode: vertical-lr;
    cursor: pointer;
    font-family: "euclidMedium";
    font-size: 12px;
    transition: all 0.2s ease-in-out;
    margin-bottom: 0px;
    color: ${(props) => (props.navFooter ? "white" : "#212529")};
  }

  .link {
    position: relative;
    width: fit-content;
    padding: 10px 0px;

    :hover {
      p {
        color: #0e8fa3;
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;
const Point = styled(motion.div)`
  position: absolute;
  height: 20px;
  width: 5px;
  background-color: #178582;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  border-radius: 5px;
  opacity: 0;
`;

export default SideNav;
