import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function AlertMessage({ type, mssg }) {
  return (
    <Alert>
      <Message>{mssg}</Message>
    </Alert>
  );
}
const Alert = styled(motion.div)`
  width: 250px;
  height: 50px;
  background-color: white;
  border-left: solid 3px green;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 26px;
  position: fixed;
  bottom: 50px;
  left: 10px;
  pointer-events: none;
`;
const Message = styled.p`
  color: #303030;
  font-family: "euclidMedium";
  margin-bottom: 0px;
`;
export default AlertMessage;
