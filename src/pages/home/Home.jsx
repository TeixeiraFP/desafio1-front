import React from "react";
import * as S from "./Home.styles";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.SectionForms>
          <Input>Pesquise o produto de sua preferência:</Input>
          <Button>Carregar</Button>
        </S.SectionForms>
      </S.Main>
      <Footer />
    </S.Container>
  );
}

export default Home;
