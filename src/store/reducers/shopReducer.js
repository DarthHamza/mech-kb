import * as types from "../actions/types";

const initialState = {
  shops: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SHOP:
      const { newShop } = action.payload;
      return {
        ...state,
        shops: [...state.shops, newShop],
      };
    case types.FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
