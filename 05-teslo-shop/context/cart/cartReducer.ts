import { ICartProduct } from '@/interfaces';
import { CartState } from '.';

type CartActionType =
  | { type: '[Cart] - LoadCard from cookies | storage'; payload: ICartProduct[] }
  | { type: '[Cart] - Update products in cart'; payload: ICartProduct[] }
  | { type: '[Cart] - Update quantity'; payload: ICartProduct };

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
  switch (action.type) {
    case '[Cart] - LoadCard from cookies | storage':
      return {
        ...state,
        cart: action.payload,
      };
    case '[Cart] - Update products in cart':
      return {
        ...state,
        cart: [...action.payload],
      };
    case '[Cart] - Update quantity':
      return {
        ...state,
        cart: state.cart.map((product) =>
          product._id === action.payload._id && product.size === action.payload.size
            ? action.payload
            : product
        ),
      };

    default:
      return state;
  }
};
