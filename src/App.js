import React from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import { GlobalStyle } from "./components/Styles/Global.styles";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <Input>Procure o seu produto:</Input>
      <Button>Loading</Button>
    </div>
  );
}

export default App;
