import { useState } from "react";
import { List } from "../styles";
import Product from "./Product";
import SearchBar from "./SearchBar";

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
      <SearchBar setQuery={setQuery} />
      <List>{productList}</List>
    </>
  );
};

export default ProductList;
