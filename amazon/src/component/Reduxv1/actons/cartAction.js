import axios from "axios";
import { ADD_TO_CART, REMOVER_TO_CART } from "../aconstant/cartConstant.js";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    dispatch({
      type: ADD_TO_CART,
      payload: data,
    });
  } catch (error) {
    console.log("errro while calling att to cart api");
  }
};

export const removeFromCart = (id) => (dispatch) => {
  console.log(id);
  dispatch({ type: REMOVER_TO_CART, payload: id });
};
