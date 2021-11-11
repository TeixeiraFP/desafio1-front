import React, { useState } from "react";
import * as S from "./Home.styles";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Products/Products";

function Home() {
  const [dataApi, setDataApi] = useState([]);
  const [valueInput, setValueInput] = useState("");

  const request = async (e) => {
    try {
      if (valueInput.length !== 0) {
        await fetch(
          "https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook"
        )
          .then((result) => result.json())
          .then((data) => {
            setDataApi(data.products);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    setValueInput(value);
  };
  const submit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(valueInput.length);
  };
  // const isvalid = (e) => {
  //   valueInput.length
  // };
  console.log(valueInput);

  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.SectionForms>
          <S.Forms onSubmit={submit}>
            <Input onChangeValue={onChange}>
              Pesquise o produto de sua preferência:
            </Input>
            <Button onClick={request}>Carregar</Button>
          </S.Forms>
        </S.SectionForms>
        <S.SectionProduct>
          {!!dataApi
            ? dataApi.map((element) =>
                element.name.includes(valueInput) ? (
                  <Products
                    productName={element.name}
                    productTypes={element.type}
                    sku={element.id}
                  />
                ) : null
              )
            : null}
        </S.SectionProduct>
      </S.Main>
      <Footer />
    </S.Container>
  );
}

export default Home;
