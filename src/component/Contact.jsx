import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/images/profilePic.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/portfolioLogoWhite.png";

function Contact() {
  return (
    <Contacts>
      <div className="container-sm" style={{ marginBottom: "60px" }}>
        <Nav>
          <img src={logo} alt="" />
          <div className="navLink">
            <SLink to={"/"}>HOME</SLink>
          </div>
        </Nav>
        <div className="row the-row">
          <div className="col-md-4">
            <FullTop>
              <img src={profilePic} /> Start a conversation
            </FullTop>
            <img src={profilePic} className="profile" />

            <div className="box">
              <div className="top">
                <p>CONTACT DETAILS</p>
              </div>
              <div className="bottom">
                <p>td.bolaji@gmail.com</p>
                <p>+234 811 342 0013</p>
              </div>
            </div>
            <div className="box">
              <div className="top">
                <p>SOCIALS</p>
              </div>
              <div className="bottom">
                <p>LinkedIn</p>
                <p>instagram</p>
                <p>Twitter</p>
                <p>GitHub</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <Head>Start a conversation</Head>
            <form action="" method="post" className="contact-form">
              <Form>
                <div className="sn">
                  <p>01</p>
                </div>
                <div className="form">
                  <label htmlFor="name">
                    <p>What&apos;s your name? </p>
                  </label>
                  <input
                    type="text"
                    placeholder="Seun Daniel *"
                    name="name"
                    required
                  />
                </div>
              </Form>
              <Form>
                <div className="sn">
                  <p>02</p>
                </div>
                <div className="form">
                  <label htmlFor="name">
                    <p>What&apos;s your email address? </p>
                  </label>
                  <input
                    type="text"
                    placeholder="seun@daniel.com *"
                    name="mail"
                    required
                  />
                </div>
              </Form>
              <Form>
                <div className="sn">
                  <p>03</p>
                </div>
                <div className="form">
                  <label htmlFor="name">
                    <p>What service are you looking for? </p>
                  </label>
                  <input
                    type="text"
                    placeholder="3D Model, Web Development ... *"
                    name="service"
                    required
                  />
                </div>
              </Form>
              <Form>
                <div className="sn">
                  <p>03</p>
                </div>
                <div className="form">
                  <label htmlFor="name">
                    <p>Additional message </p>
                  </label>
                  <input
                    type="text"
                    placeholder="Hey Tope, I found your ... *"
                    name="message"
                    required
                  />
                </div>
              </Form>
              <button type="submit">
                <p>📫</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <SideNav>
        <SideLink to={"/"}>HOME</SideLink>
      </SideNav>
      <Curtain
        initial={{ x: 0 }}
        animate={{}}
        exit={{
          top: ["110vh", "0vh", "0vh"],

          transition: {
            times: [0.2, 0.6, 1],
            duration: 1.1,
          },
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{}}
          exit={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.75,
            },
          }}
        >
          HOME
        </motion.p>
      </Curtain>

      <CurtainIN
        initial={{ x: 0 }}
        animate={{
          top: "-115vh",
          transition: {
            // times: [0.2, 0.6, 1],
            duration: 0.2,
            delay: 0.6,
          },
        }}
      >
        <motion.p
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.3,
            },
          }}
        >
          CONTACT
        </motion.p>
      </CurtainIN>
    </Contacts>
  );
}
const Contacts = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  /* padding-top: 100px; */
  padding-bottom: 100px;
  background-color: #292929;
  color: white;
  overflow-x: hidden;
  .the-row {
    @media screen and (max-width: 430px) {
      padding-left: 10px;
    }
  }

  img.profile {
    width: 80px;
    margin: 120px 0px 70px 0px;
    @media screen and (max-width: 870px) {
      margin: 80px 0px 70px 0px;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  .box {
    margin-top: 20px;
    margin-bottom: 40px;
    .top {
      p {
        font-size: 8px;
        color: #777777;
        font-family: "euclidBold";
        margin-bottom: 5px;

        @media screen and (max-width: 767px) {
          font-size: 10px;
        }
      }
    }

    .bottom {
      p {
        font-size: 14px;
        font-family: "euclidRegular";
        color: white;
        margin-bottom: 4px;
        @media screen and (max-width: 767px) {
          font-size: 16px;
        }
      }
    }
  }
  .contact-form {
    margin-top: 100px;
    @media screen and (max-width: 767px) {
      margin-top: 50px;
    }
    button {
      margin-top: 100px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      outline: none;
      position: relative;
      border: none;
      background-color: #178582;
      z-index: 2;
      overflow: hidden;

      @media screen and (max-width: 767px) {
        margin-top: 50px;
      }
      p {
        margin-bottom: 0px;
        font-size: 20px;
      }
      ::before {
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #126e6b;
        position: absolute;
        top: 130px;
        left: 0;
        z-index: -1;
        transition: all 0.2s ease-in-out;
      }

      :hover {
        ::before {
          top: 0;
          z-index: -1;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }
`;
const Head = styled.h1`
  font-size: 85px;
  width: 700px;
  position: relative;
  font-family: "euclidLight";
  width: 500px;
  color: white;
  z-index: 0;

  @media screen and (max-width: 870px) {
    font-size: 70px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const Form = styled.div`
  display: grid;
  margin: 50px 0px;
  grid-template-columns: 7% 90%;
  .sn {
    p {
      color: #777777;
      font-family: "euclidBold";
      font-size: 13px;
    }
  }
  .form {
    label {
      display: block;
      font-family: "euclidRegular";
      font-size: 17px;
    }
    input {
      background: none;
      outline: none;
      border: none;
      font-family: "euclidMedium";
      font-size: 18px;
      color: #777777;
      width: 100%;
    }
  }
`;
const SideNav = styled.div`
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
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const SideLink = styled(Link)`
  writing-mode: vertical-lr;
  font-family: "euclidMedium";
  font-size: 12px;
  transition: all 0.2s ease-in-out;
  margin-bottom: 0px;
  transition: all 0.2s ease-in-out;
  color: white;
  z-index: 12;
  text-decoration: none;

  :hover {
    color: #0e8fa3;
  }
`;

const Curtain = styled(motion.div)`
  position: fixed;
  background-color: #292929;
  /* background-color: #d66565; */
  width: 100%;
  height: 110vh;
  top: -1;
  left: 0;
  z-index: 17;
  display: flex;
  justify-content: center;
  align-items: center;
  P {
    font-size: 35px;
    color: white;
    font-family: "euclidLight";
    opacity: 0;
  }
`;
const CurtainIN = styled(motion.div)`
  position: fixed;
  background-color: #292929;
  /* background-color: #d66565; */
  width: 100%;
  height: 110vh;
  top: 0;
  left: 0;
  z-index: 17;
  display: flex;
  justify-content: center;
  align-items: center;
  P {
    font-size: 35px;
    color: white;
    font-family: "euclidLight";
  }
`;
const FullTop = styled.h1`
  font-size: 70px;
  width: 90%;
  position: relative;
  color: white;
  z-index: 0;
  font-family: "euclidLight";
  display: none;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    display: block;
  }
  @media screen and (max-width: 450px) {
    font-size: 50px;
    font-family: "euclidRegular";
  }

  img {
    width: 70px;
    @media screen and (max-width: 450px) {
      width: 50px;
    }
  }
`;
const Nav = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 0px 30px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  img {
    width: 30px;
  }
  .navLink {
  }
`;

const SLink = styled(Link)`
  color: #f6f6f6;
  text-decoration: none;
  font-family: "euclidMedium";
  transition: all 0.2s ease-in-out;
  display: none;
  :hover {
    color: #0e8fa3;
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 750px) {
    display: block;
  }
`;
export default Contact;
