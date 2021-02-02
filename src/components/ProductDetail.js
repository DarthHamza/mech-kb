import { Redirect, useParams } from "react-router-dom";

import DeleteButton from "./DeleteButton";
import { DetailWrapper } from "../styles";
import { Helmet } from "react-helmet";
import UpdateButton from "./UpdateButton";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  // const products = useSelector((state) => state.products);
  const productSlug = useParams().productSlug;
  // const product = products.find((product) => product.slug === productSlug);

  const product = useSelector((state) =>
    state.products.find((product) => product.slug === productSlug)
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
      <DeleteButton product={product} />
      <UpdateButton slug={product.slug} />
    </DetailWrapper>
  );
};

export default ProductDetail;
