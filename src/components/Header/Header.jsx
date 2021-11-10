import React from "react";
import * as S from "./Header.styles";

function Header() {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>Calindra Tech</S.Title>
        <S.Subtitle>A development company made by developers </S.Subtitle>
      </S.ContainerTitle>
      <S.Nav>
        <S.Link>About Us</S.Link>
        <S.Link>Contact</S.Link>
        <S.Link>Work With Us</S.Link>
      </S.Nav>
    </S.Container>
  );
}

export default Header;
