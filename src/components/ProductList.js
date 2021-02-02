import { BsPlusSquare } from "react-icons/bs";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
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
      <Link to="/products/new">
        <BsPlusSquare className="float-right" size="2em" />
      </Link>
      <List>{productList}</List>
    </>
  );
};

export default ProductList;
