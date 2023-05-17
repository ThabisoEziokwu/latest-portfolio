import styled from "styled-components";
import { usePageLoading } from "react-use";
function Loader() {
  const isPageLoading = usePageLoading();

  if (isPageLoading) {
    console.log("Page is loading");
  }
  return (
    <Load>
      <LoaderBlanket>
        <Blanket />
        <Blanket />
        <Blanket />
        <Blanket />
        <Blanket />
      </LoaderBlanket>
    </Load>
  );
}
const Load = styled.div`
  position: absolute;
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
