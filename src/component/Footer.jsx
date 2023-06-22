import styled from "styled-components";
import profilePic from "../assets/images/profilePic.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import Distance from "../utils/Distance";
import { Link } from "react-router-dom";
function Footer({ setcontactHeight, setNavFooter, setShowLogo }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const introAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      setShowLogo(false);
      gsap.to(".psuedo", {
        opacity: 1,
        duration: 0.5,
      });
      introAnimation.start({
        opacity: 1,
        y: 0,
      });
      setNavFooter(true);
    } else {
      setShowLogo(true);
      gsap.to(".psuedo", {
        opacity: 0,
        duration: 0.5,
      });
      setNavFooter(false);
    }
  });

  return (
    <Distance dist={setcontactHeight}>
      <Foot ref={ref}>
        <div className="psuedo">
          <Intro
            initial={{ y: 10, opacity: 0 }}
            animate={introAnimation}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Head colo={inView}>
              <ProfileImage src={profilePic} />
              Let&apos;s work together
            </Head>
          </Intro>
          <Mid>
            <div className="line"></div>
            <ButLink to={"/contact"}>
              <div className="button">
                <p>Say Hello</p>
              </div>
            </ButLink>
          </Mid>
          <div className="press">
            <ConButton>
              <p>
                <a href="tel:+2348113420013">+234 811 342 0013</a>
              </p>
            </ConButton>
            <ConButton>
              <p>
                <a href="mailto:td.bolaji@gmail.com">td.bolaji@gmail.com</a>
              </p>
            </ConButton>
          </div>
        </div>
        <BottomFooter>
          <div className="inside">
            <BotBox>
              <div className="one">
                <div className="top">
                  <p>VERSION</p>
                </div>
                <div className="bottom">
                  <p>2023 &copy; Edition</p>
                </div>
                <div className="line2"></div>
              </div>
            </BotBox>

            <BotBox>
              <div className="top">
                <p>SOCIALS</p>
              </div>
              <div className="bottom">
                <SocLinks to={"/contact"}>LinkedIn</SocLinks>
                <SocLinks
                  to={"https://instagram.com/hayinla_"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </SocLinks>
                <SocLinks
                  to={"https://twitter.com/td_bolaji?s=21"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </SocLinks>
                <SocLinks
                  to={"https://github.com/topghostly/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </SocLinks>
              </div>
            </BotBox>
          </div>
        </BottomFooter>
      </Foot>
    </Distance>
  );
}
const Foot = styled.div`
  z-index: 0;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-color: #292929;
  /* background-color: #0b0c10; */

  .psuedo {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    z-index: 0;
    opacity: 0;

    .press {
      width: 700px;
      margin-bottom: 90px;

      @media screen and (max-width: 750px) {
        width: 500px;
      }
      @media screen and (max-width: 600px) {
        width: 90%;
        margin-top: 50px;
      }
    }
  }
`;
const Intro = styled(motion.div)`
  font-family: "euclidLight";
  color: white;
  z-index: 0;
`;
const Head = styled.h1`
  font-size: 76px;
  width: 700px;
  position: relative;
  color: white;
  z-index: 0;

  @media screen and (max-width: 750px) {
    font-size: 70px;
    width: 500px;
  }
  @media screen and (max-width: 550px) {
    font-size: 60px;
    width: 450px;
  }
  @media screen and (max-width: 470px) {
    margin-left: 10px;
    margin-top: 40px;
    font-size: 55px;
    width: 360px;
    font-family: "euclidRegular";
  }
  @media screen and (max-width: 370px) {
    font-size: 52px;
    width: 320px;
  }
`;
const ProfileImage = styled.img`
  margin-right: 25px;
  width: 75px;
  @media screen and (max-width: 750px) {
    width: 70px;
  }
  @media screen and (max-width: 550px) {
    width: 59px;
  }
  @media screen and (max-width: 550px) {
    width: 59px;
  }
  @media screen and (max-width: 470px) {
    width: 54px;
  }
  @media screen and (max-width: 370px) {
    width: 50px;
  }
`;

const Mid = styled.div`
  width: 700px;
  position: relative;

  .button {
    width: 150px;
    height: 150px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #178582;
    /* background-color: #0e8fa3; */
    border-radius: 50%;
    margin-left: auto;
    margin-right: 50px;
    z-index: 2;
    overflow: hidden;

    ::before {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #126e6b;
      position: absolute;
      top: 150px;
      z-index: -1;
      left: 0;
      transition: all 0.2s ease-in-out;
    }

    :hover {
      ::before {
        top: 0;
        transition: all 0.2s ease-in-out;
        z-index: -1;
      }
    }
    @media screen and (max-width: 650px) {
      margin-right: 100px;
    }
    @media screen and (max-width: 650px) {
      margin-right: 200px;
    }
    @media screen and (max-width: 500px) {
      width: 130px;
      height: 130px;
      :before {
        top: 130px;
      }
    }

    p {
      margin: 0;
      color: white;
      font-family: "euclidRegular";
      font-size: 18px;
    }
  }
  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #777777;
    top: 50%;
    z-index: -1;
    @media screen and (max-width: 750px) {
      padding: 0px 30px;
    }
    @media screen and (max-width: 650px) {
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
    }
    @media screen and (max-width: 580px) {
      width: 65%;
    }
    @media screen and (max-width: 470px) {
      width: 50%;
    }
  }
`;
const ConButton = styled.div`
  cursor: pointer;
  border: solid 0.1px #777777;
  padding: 15px 30px;
  border-radius: 50px;
  width: fit-content;
  display: inline-block;
  margin: 5px;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #464646;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 30px;
  }
  @media screen and (max-width: 470px) {
    width: 80%;
    margin: 5px auto;
    padding: 10px 10px;
  }

  p {
    color: white;
    margin-bottom: 0px;
    font-family: "euclidRegular";
    a {
      color: white;
      text-decoration: none;
    }

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }
`;
const ButLink = styled(Link)`
  text-decoration: none;
`;

const BottomFooter = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 10px;
  /* @media screen and (max-width: 500px) {
    bottom: -5px;
    height: auto;
  } */
  .inside {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;

    /* @media screen and (max-width: 500px) {
      display: block;
    } */
  }
`;
const BotBox = styled.div`
  height: 40px;
  width: auto;
  position: relative;
  margin-bottom: 10px;
  .line2 {
    display: none;
    /* @media screen and (max-width: 500px) {
      display: block;
    } */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 1px;
    bottom: -5px;
    background-color: #777777;
  }
  .top {
    height: 10px;
    p {
      margin-bottom: 0px;
      color: #777777;
      font-size: 10px;
      font-family: "euclidRegular";
    }
  }
  .bottom {
    position: relative;
    height: 30px;
    width: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: end;
    gap: 20px;
    /* @media screen and (max-width: 500px) {
      width: 100%;
      justify-content: space-between;
    } */
    p {
      margin-bottom: 0px;
      font-size: 12px;
      font-family: "euclidRegular";
      color: white;
    }
  }
`;
const SocLinks = styled(Link)`
  color: #f2f2f2;
  margin-bottom: 0px;
  font-size: 12px;
  font-family: "euclidRegular";
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  :hover {
    color: #178582;
    transition: all 0.2s ease-in-out;
  }
`;
export default Footer;
