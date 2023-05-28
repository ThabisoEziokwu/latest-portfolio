import styled from "styled-components";
import { useState } from "react";

function Border() {
  return <Edges></Edges>;
}
const Edges = styled.div`
  /* background: linear-gradient(
    180deg,
    #f6f6f6 0%,
    rgba(197, 197, 197, 0.2) 100%
  ); */
  /* background-color: #f6f6f6; */

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  border: solid 17px white;
  pointer-events: none;
  z-index: 999;
`;

export default Border;
