import { ADD_TO_CART, REMOVER_TO_CART } from "../aconstant/cartConstant";

export const cartReducers = (state = { cartitems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartitems.find((product) => product.id === item.id);

      if (exist) {
        return;
      }
      return { ...state, cartitems: [...state.cartitems, item] };
    case REMOVER_TO_CART:
      return {
        ...state,
        cartitems: state.cartitems.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
