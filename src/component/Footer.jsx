import styled from "styled-components";
import profilePic from "../assets/images/profilePic.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function Footer({ changeBack }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      changeBack(true);
    }
    if (!inView) {
      changeBack(false);
    }
  });
  return (
    <Foot ref={ref}>
      <Intro>
        <Head colo={inView}>
          <ProfileImage src={profilePic} />
          Let&apos;s work together
        </Head>
      </Intro>
      <Mid>
        <div className="line"></div>
        <div className="button">
          <p>Say Hello</p>
        </div>
      </Mid>
    </Foot>
  );
}
const Foot = styled.div`
  z-index: 3;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const Intro = styled.div`
  font-family: "euclidRegular";
  color: white;
`;
const Head = styled.h1`
  font-size: 80px;
  width: 500px;
  position: relative;
  color: ${(props) => (props.colo ? "white" : "#1b1b1b")};
`;
const ProfileImage = styled.img`
  margin-right: 25px;
  width: 80px;
`;

const Mid = styled.div`
  width: 700px;
  position: relative;

  .button {
    width: 150px;
    position: relative;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5e5e63;
    border-radius: 50%;
    margin-left: auto;
    margin-right: 50px;

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
    background-color: blue;
    top: 50%;
    z-index: -1;
  }
`;
export default Footer;
