import products from "../products";
import styles from "../styles";
import Product from "./Product";

const ProductList = () => {
  const productList = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  return <div style={styles.list}>{productList}</div>;
};

export default ProductList;
