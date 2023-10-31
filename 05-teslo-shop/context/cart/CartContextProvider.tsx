import { FC, ReactNode, useReducer, createContext } from 'react';

import { cartReducer } from '.';
import { ICartProduct } from '@/interfaces';

interface ContextProps {
  cart: ICartProduct[]
}

export const CartContext = createContext({} as ContextProps);

export interface CartState {
  cart: ICartProduct[];
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  return <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>;
};