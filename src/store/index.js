import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions";
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchProducts());
store.dispatch(fetchShops());
store.dispatch(checkForToken());

export default store;
