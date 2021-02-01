import { useState } from "react";
import { List } from "../styles";
import Product from "./Product";
import SearchBar from "./SearchBar";
import { Helmet } from "react-helmet";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = props.products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => (
      <Product
        key={product.id}
        product={product}
        deleteProduct={props.deleteProduct}
      />
    ));
  return (
    <>
      <Helmet>
        <title>Vader's Keyboards</title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <List>{productList}</List>
    </>
  );
};

export default ProductList;
