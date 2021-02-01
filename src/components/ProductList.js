import { Helmet } from "react-helmet";
import { List } from "../styles";
import Product from "./Product";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => <Product key={product.id} product={product} />);
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
