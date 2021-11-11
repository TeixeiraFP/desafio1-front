import React, { useEffect, useState } from "react";
import * as S from "./Home.styles";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Products/Products";

function Home() {
  const [dataApi, setDataApi] = useState([]);
  // const [apiHere, setApiHere] = useState([false]);
  const [valueInput, setValueInput] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setValueInput(value);
  };

  useEffect(() => {
    fetch(
      "https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook"
    )
      .then((result) => result.json())
      .then((data) => {
        setDataApi(data.products);
        // setApiHere(true);
      });
  }, []);

  console.log(valueInput);
  console.log(dataApi);

  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.SectionForms>
          <Input onChangeValue={onChange}>
            Pesquise o produto de sua preferência:
          </Input>
          <Button>Carregar</Button>
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
