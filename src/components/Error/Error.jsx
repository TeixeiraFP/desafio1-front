import React from "react";
import styled from "styled-components";

function Error(props) {
  return <MsgError value={props.value}>{props.children}</MsgError>;
}

const MsgError = styled.div`
  font-size: 13px;
  margin-top: 5px;

  color: red;
`;

export default Error;
