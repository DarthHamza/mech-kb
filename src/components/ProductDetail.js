import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const product = props.product;
  return (
    <DetailWrapper className="text-left">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p className="text-danger">{product.price} USD</p>
      <p>{product.description}</p>
      <button
        className="btn btn-outline-info"
        onClick={() => props.setProduct(null)}
      >
        Go back home!
      </button>
    </DetailWrapper>
  );
};

export default ProductDetail;
