import { combineReducers } from "redux";

import authReducer from "./authReducer";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  authReducer,
  magic: productReducer, // === productReducer: productReducer,
  shopReducer, // === shopReducer: shopReducer,
});

export default rootReducer;
