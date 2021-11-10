import React from "react";
import * as S from "./Header.styles";

function Header() {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>
          <S.NavTitle href="/">Calindra Tech</S.NavTitle>
        </S.Title>
        <S.Subtitle>A development company made by developers </S.Subtitle>
      </S.ContainerTitle>
      <S.Nav>
        <S.Link href="#">About Us</S.Link>
        <S.Link href="#">Contact</S.Link>
        <S.Link href="#">Work With Us</S.Link>
      </S.Nav>
    </S.Container>
  );
}

export default Header;
