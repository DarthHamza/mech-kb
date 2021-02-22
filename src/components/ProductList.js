import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";
import { List } from "../styles";
import Product from "./Product";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProductList = ({ products }) => {
  const [query, setQuery] = useState("");
  const user = useSelector((state) => state.authReducer.user);

  if (!user) return <Redirect to="/signin" />;

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
