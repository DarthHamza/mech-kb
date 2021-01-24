import { GlobalStyle, ThemeButton } from "./styles";

import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";

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
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <ThemeButton onClick={() => alert("I do nothing..")}>
        Dark Theme
      </ThemeButton>
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
