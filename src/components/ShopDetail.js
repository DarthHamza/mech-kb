import { Link, Redirect, useParams } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";

import { DetailWrapper } from "../styles";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const ShopDetail = () => {
  const shopSlug = useParams().shopSlug;
  const allProducts = useSelector((state) => state.magic.products);
  const shop = useSelector((state) =>
    state.shopReducer.shops.find((shop) => shop.slug === shopSlug)
  );

  const products = shop.products.map((product) =>
    allProducts.find((_product) => _product.id === product.id)
  );

  if (!shop) return <Redirect to="/shops" />;
  return (
    <>
      <DetailWrapper className="text-left">
        <Helmet>
          <title>{shop.name}</title>
        </Helmet>
        <h1>{shop.name}</h1>
        <img src={shop.image} alt={shop.name} />
      </DetailWrapper>
      <Link to={`/shops/${shop.id}/products/new`}>
        <BsPlusSquare className="float-right" size="2em" />
      </Link>
      <ProductList products={products} />
    </>
  );
};

export default ShopDetail;
