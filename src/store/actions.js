// ACTION TYPES
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// ACTIONS

export const addProduct = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: { newProduct },
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId: productId },
});
