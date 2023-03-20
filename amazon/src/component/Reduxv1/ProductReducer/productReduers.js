

import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../aconstant/constant.js";

export const productReducers = (state = { newproducts: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        newproducts: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        newproducts: action.payload,
      };

    case ALL_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const singleProductReducer = (state = { sproduct: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        sproduct: [],
      };

    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        sproduct: action.payload,
      };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
