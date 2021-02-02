import { Keyboard, KeyboardImage } from "../styles";

import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";
import UpdateButton from "./UpdateButton";

const Product = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;

  return (
    <Keyboard>
      <p>{product.name}</p>
      <p className="price">Price: {product.price} USD</p>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <br />
      <DeleteButton productId={product.id} />
      <UpdateButton slug={product.slug} />
    </Keyboard>
  );
};

export default Product;
