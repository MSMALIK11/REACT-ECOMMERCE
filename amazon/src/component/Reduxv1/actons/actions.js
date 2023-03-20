

import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../aconstant/constant.js";

import axios from "axios";
export const getAllProduct = async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });
    const { data } = await axios.get("https://dummyjson.com/products");

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    // dispatch({
    //     type:ALL_PRODUCT_FAIL,
    //     payload:error.response &&  error.response.data.message
    // })
  }
};

// get single product
export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};

//
