import React from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./components/Styles/Global.styles";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Button />
    </div>
  );
}

export default App;
