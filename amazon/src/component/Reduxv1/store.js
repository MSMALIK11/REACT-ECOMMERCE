import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  productReducers,
  singleProductReducer,
} from "./ProductReducer/productReduers";
import { cartReducers } from "./ProductReducer/cartReducers";
const middleware = [thunk];
const initialState = {
  name: "MR SHOAIB",
};
const reducer = combineReducers({
  productList: productReducers,
  productDetails: singleProductReducer,
  cartItems: cartReducers,
});

const store = createStore(
  reducer,
  initialState,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
