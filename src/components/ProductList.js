import { useState } from "react";
import { List } from "../styles";
import Product from "./Product";
import SearchBar from "./SearchBar";
import products from "../products";

const ProductList = (props) => {
  const [query, setQuery] = useState("");
  console.log(query);

  const productList = products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => (
      <Product
        key={product.id}
        product={product}
        setProduct={props.setProduct}
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
