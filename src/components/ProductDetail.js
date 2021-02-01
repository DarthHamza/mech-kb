import { DetailWrapper } from "../styles";
import DeleteButton from "./DeleteButton";
import { useParams, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.slug === productSlug
  );
  if (!product) return <Redirect to="/products" />;
  return (
    <DetailWrapper className="text-left">
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p className="text-danger">{product.price} USD</p>
      <p>{product.description}</p>
      <button className="btn btn-outline-info">Go back home!</button>
      <DeleteButton deleteProduct={props.deleteProduct} product={product} />
    </DetailWrapper>
  );
};

export default ProductDetail;
