import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  return (
    <Works>
      <div className="container-sm cont">
        <Head>Some things i&apos;ve built</Head>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </Works>
  );
}
const Works = styled.div`
  height: 200vh;
  position: relative;
  z-index: 2;
  .cont {
    width: 100%;
    height: 100%;
  }
`;
const Head = styled.h1`
  font-family: "euclidSemiBold";
  font-size: 30px;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #161616 10%, #5e5e63 70%);
  background-size: 50% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: sticky;
  top: 100px;
`;
export default Projects;
