import { Keyboard, KeyboardImage } from "../styles";
import DeleteButton from "./DeleteButton";
const Product = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;

  return (
    <Keyboard>
      <p>{product.name}</p>
      <p className="price">Price: {product.price} USD</p>
      <img
        src={product.image}
        alt={product.name}
        onClick={() => console.log("Take me to detail")}
      />
      <br />
      <DeleteButton deleteProduct={props.deleteProduct} product={product} />
    </Keyboard>
  );
};

export default Product;
