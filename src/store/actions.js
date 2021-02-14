// ACTION TYPES
import axios from "axios";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
// ACTIONS

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/products");
    console.log(res.data);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const addProduct = (newProduct) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/products/", newProduct);
    dispatch({
      type: ADD_PRODUCT,
      payload: { newProduct: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8000/products/${productId}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: { productId },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const updateProduct = (updatedProduct) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:8000/products/${updatedProduct.id}`,
      updatedProduct
    );
    dispatch({
      type: UPDATE_PRODUCT,
      payload: { updatedProduct: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
