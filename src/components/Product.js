import { Keyboard, KeyboardImage } from "../styles";

const Product = (props) => {
  const product = props.product;
  return (
    <Keyboard>
      <p>{product.name}</p>
      <p className="price">Price: {product.price} USD</p>
      <img src={product.image} alt={product.name} />
    </Keyboard>
  );
};

export default Product;
