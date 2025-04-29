import styled from "styled-components";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resume from "../assets/tope-resume.pdf";

function Hamburger({ aboutHeight, projectHeight }) {
  const [press, setPress] = useState(false);
  const linksUp = (e) => {
    const element = e.target;
    gsap.to(element, {
      y: -20,
      duration: 0.001,
    });
  };
  const linksDown = (e) => {
    const element = e.target;
    gsap.to(element, {
      y: 0,
      duration: 0.001,
    });
  };
  const toAbout = () => {
    window.scrollTo(0, aboutHeight);
  };
  const toProjects = () => {
    window.scrollTo(0, projectHeight);
  };

  useEffect(() => {
    if (press) {
      gsap.set(".bg-links", {
        x: 0,
        opacity: 1,
      });
      gsap.to(".icon", {
        scale: 0,
        duration: 0.3,
      });
      gsap.to(".tab-list", {
        right: "0px",
        delay: 0.3,
      });
      gsap.from(".bg-links", {
        x: 100,
        opacity: 0,
        delay: 0.2,
        stagger: 0.2,
        duration: 0.5,
      });
    }
    if (!press) {
      gsap.to(".bg-links", {
        x: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.4,
      });
      gsap.to(".icon", {
        scale: 1,
        delay: 1.4,
        duration: 0.3,
      });
      gsap.to(".tab-list", {
        right: "-360px",
        delay: 0.9,
      });
    }
  });
  return (
    <Cluster>
      <div
        className="icon"
        onClick={() => {
          setPress(true);
        }}
      >
        <Hands className="one" />
        <Hands className="two" />
      </div>

      <TabList
        className="tab-list"
        onClick={() => {
          setPress(false);
        }}
      >
        <CloseIcon
          onClick={() => {
            setPress(false);
          }}
        >
          <Close className="one" />
          <Close className="two" />
        </CloseIcon>

        <div className="link-list">
          <SlideLink
            className="bg-links"
            onMouseEnter={linksUp}
            onMouseLeave={linksDown}
            onClick={() => {
              toAbout();
            }}
          >
            ABOUT
          </SlideLink>
          <SlideLink
            className="bg-links"
            onMouseEnter={linksUp}
            onMouseLeave={linksDown}
            onClick={() => {
              toProjects();
            }}
          >
            PROJECTS
          </SlideLink>
          <SlideLink
            className="bg-links"
            to={"/contact"}
            onMouseEnter={linksUp}
            onMouseLeave={linksDown}
          >
            CONTACT
          </SlideLink>
          {/* <SlideLink
            to={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-links"
            onMouseEnter={linksUp}
            onMouseLeave={linksDown}
          >
            RESUME
          </SlideLink> */}
          <div className="line"></div>

          <div className="contact-ab">
            <p>TW</p>
            <p>LI</p>
            <p>IS</p>
            <p>GH</p>
          </div>
        </div>
      </TabList>
    </Cluster>
  );
}
const Cluster = styled.div`
  width: 60px;
  border-radius: 50%;
  height: 60px;
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
  }

  .icon {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #292929;
    border-radius: 50%;
    gap: 5px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(87, 87, 87, 0.288) 0px 7px 29px 0px;
    .one {
      transform: translateX(-3px);
      transition: all 0.2s ease-in-out;
    }
    .two {
      transform: translateX(3px);
      transition: all 0.2s ease-in-out;
    }

    :hover {
      .one {
        transform: translateX(0px);
        transition: all 0.2s ease-in-out;
      }
      .two {
        transform: translateX(0px);
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;
const Hands = styled.div`
  position: relative;
  background-color: #f6f6f6;
  width: 21px;
  height: 2px;
`;

const TabList = styled.div`
  position: absolute;
  height: 100vh;
  width: 360px;
  right: -360px;
  top: 0;
  background-color: #292929;

  .link-list {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
    padding: 20px;

    .contact-ab {
      margin: 0px auto;
      display: flex;
      width: 80%;
      justify-content: space-between;
      p {
        color: #666666;
      }
    }
    .line {
      width: 100%;
      margin: 0px auto;
      height: 1px;
      background-color: #999999;
    }
  }
`;
const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 2px #f6f6f6;
  background-color: #292929;
  transition: all 0.2s ease-in-out;

  :hover {
    border: solid 2px #178582;
    transition: all 0.2s ease-in-out;
  }

  .one {
    transform: rotate(45deg) translate(2px, 3px);
  }
  .two {
    transform: rotate(-45deg) translate(2px, -3px);
  }
`;
const Close = styled.div`
  position: relative;
  background-color: #f6f6f6;
  width: 25px;
  height: 2px;
`;

const SlideLink = styled(Link)`
  text-decoration: none;
  font-size: 45px;
  color: #f6f6f6;
  font-family: "euclidLight";
  transition: all 0.3s ease-in-out;

  :hover {
    color: #178582;
    transform: translateY(-10px);
    transition: all 0.2s ease-in-out;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
`;
export default Hamburger;
