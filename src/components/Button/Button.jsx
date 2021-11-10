import React from "react";
import * as S from "./Button.styles";

function Button(props) {
  return (
    <S.Button type={props.type} onClick={props.onClick}>
      {props.children}
    </S.Button>
  );
}

export default Button;
