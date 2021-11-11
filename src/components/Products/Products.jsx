import React from "react";
import * as S from "./Products.styles";

function Products(props) {
  return (
    <S.Container>
      <S.Title>Produto: {props.productName}</S.Title>
      <S.Type>Tipo: {props.productTypes}</S.Type>
      <S.Id>SKU: {props.sku}</S.Id>
    </S.Container>
  );
}

export default Products;
