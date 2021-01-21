import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "blue", // main font color
  backgroundColor: "grey", // main background color
  hamza: "maroon",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
