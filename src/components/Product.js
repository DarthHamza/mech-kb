import styles from "../styles";

const Product = (props) => {
  const product = props.product;
  return (
    <div style={styles.keyboard}>
      <h3>{product.name}</h3>
      <p style={styles.text}>Price: {product.price} USD</p>
      <img
        src={product.image}
        style={styles.keyboardImage}
        alt={product.name}
      />
    </div>
  );
};

export default Product;
