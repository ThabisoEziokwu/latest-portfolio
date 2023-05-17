import styled from "styled-components";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";

function LandingPage() {
  return (
    <Page>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </Page>
  );
}
const Page = styled.div`
  position: relative;
  max-width: 100%;
  padding: 20px;
  height: 200vh;
  /* background-color: #2a3139; */
  background: rgb(255, 255, 255);
`;
export default LandingPage;
