import React from "react";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
