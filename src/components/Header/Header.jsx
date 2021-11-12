import React from "react";
import * as S from "./Header.styles";

function Header() {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>
          <S.NavTitle href="/">Calindra Tech</S.NavTitle>
        </S.Title>
        <S.Subtitle>
          Uma empresa de Desenvolvimento feita por Desenvolvedores{" "}
        </S.Subtitle>
      </S.ContainerTitle>
      <S.Nav>
        <S.Link href="#">Sobre Nós</S.Link>
        <S.Link href="#">Contatos</S.Link>
        <S.Link href="#">Trabalhe Conosco</S.Link>
      </S.Nav>
    </S.Container>
  );
}

export default Header;
