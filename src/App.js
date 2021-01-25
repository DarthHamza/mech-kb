import { useState } from "react";
import { GlobalStyle, ThemeButton } from "./styles";

import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { ThemeProvider } from "styled-components";

import products from "./products";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);
  const toggleTheme = () => {
    if (currentTheme === "dark") setCurrentTheme("light");
    else setCurrentTheme("dark");
  };

  const display = product ? (
    <ProductDetail product={product} setProduct={setProduct} />
  ) : (
    <ProductList setProduct={setProduct} />
  );
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme.toUpperCase()} Theme
      </ThemeButton>
      <Home />
      {display}
    </ThemeProvider>
  );
}

export default App;
