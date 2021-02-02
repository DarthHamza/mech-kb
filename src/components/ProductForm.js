import React, { useState } from "react";

import { addProduct } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) =>
    setProduct({ ...product, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(product));
    history.push("/products");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Create Product</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={product.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          value={product.price}
          onChange={handleChange}
          name="price"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          value={product.description}
          onChange={handleChange}
          name="description"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="text"
          value={product.image}
          onChange={handleChange}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        Create
      </button>
    </form>
  );
};

export default ProductForm;
