import { List } from "../styles";
import Product from "./Product";
import products from "../products";

const ProductList = () => {
  const productList = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  return <List>{productList}</List>;
};

export default ProductList;
