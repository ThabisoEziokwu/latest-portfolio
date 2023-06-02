import styled from "styled-components";
import gsap from "gsap";
import { useEffect } from "react";
function Loader({ loadingStatus }) {
  useEffect(() => {
    if (!loadingStatus) {
      gsap.to(".blanket", {
        scaleY: 0,
        stagger: 0.3,
        ease: "power3.out",
      });
    }
  });
  return (
    <Load>
      <LoaderBlanket>
        <Blanket className="blanket" />
        <Blanket className="blanket" />
        <Blanket className="blanket" />
        <Blanket className="blanket" />
        <Blanket className="blanket" />
      </LoaderBlanket>
    </Load>
  );
}
const Load = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: 999;
  margin-left: -20px;
`;
const LoaderBlanket = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
`;
const Blanket = styled.div`
  transform-origin: top;
  height: 100vh;
  flex: 1;
  background-color: #ff5232;
`;
export default Loader;
