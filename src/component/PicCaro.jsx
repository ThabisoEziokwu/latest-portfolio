import styled from "styled-components";

function PicCaro({ bigPic, smallPicOne, smallPicTwo }) {
  return (
    <Carosel>
      <BigPic background={bigPic} />
      <div className="smallPics">
        <SmallPic backgroundOne={smallPicOne} />
        <SmallPic backgroundOne={smallPicTwo} />
      </div>
    </Carosel>
  );
}
const Carosel = styled.div`
  width: 90vw;
  pointer-events: none;
  height: 90vw;
  margin: 0px auto;
  z-index: 10;
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
  }
  .smallPics {
    position: relative;
    width: 100%;
    height: 38%;
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
  }
`;
const BigPic = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;
const SmallPic = styled.div`
  width: 49%;
  height: 100%;
  background-color: aquamarine;
  background-image: url(${(props) => props.backgroundOne});
  background-size: cover;
  border-radius: 8px;
  /* background-position: center 0px; */
`;
export default PicCaro;
