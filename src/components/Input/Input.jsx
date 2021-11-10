import React from "react";
import * as S from "./Input.styles";
function Input(props) {
  return (
    <S.Container>
      <S.Label>{props.children}</S.Label>
      <S.Input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChangeValue}
      />
    </S.Container>
  );
}

export default Input;
