import { ICartProduct } from '@/interfaces';
import { CartState } from '.';

type CartActionType = 
  | { type: '[Cart] - LoadCard from cookies | storage', payload: ICartProduct[] }
  | { type: '[Cart] - Add product', payload: ICartProduct }

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
  switch (action.type) {
    case '[Cart] - LoadCard from cookies | storage':
      return {
        ...state,
      };

    default:
      return state;
  }
};