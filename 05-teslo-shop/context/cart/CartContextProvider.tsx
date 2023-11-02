import { FC, ReactNode, useReducer, createContext, useEffect, useState, useMemo } from 'react';
import Cookies from 'js-cookie';

import { cartReducer } from '.';
import { ICartProduct } from '@/interfaces';

interface ContextProps {
  cart: ICartProduct[];
  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  removeCartProduct: (product: ICartProduct) => void;
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) return;
    try {
      setIsMounted(true);
      const products = Cookies.get('cart');
      const cart = products ? JSON.parse(products) : [];
      dispatch({ type: '[Cart] - LoadCard from cookies | storage', payload: cart });
    } catch (e) {
      dispatch({ type: '[Cart] - LoadCard from cookies | storage', payload: [] });
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) Cookies.set('cart', JSON.stringify(state.cart), { sameSite: 'strict' });
  }, [state.cart, isMounted]);

  const contextProviderValue = useMemo((): ContextProps => {
    const addProductToCart = (newProduct: ICartProduct) => {
      const type = '[Cart] - Update products in cart';
      const isSameProduct = (p: ICartProduct) =>
        p._id === newProduct._id && p.size === newProduct.size;
      const productInCart = state.cart.some(isSameProduct);

      if (!productInCart) return dispatch({ type, payload: [...state.cart, newProduct] });

      const updatedProducts = state.cart.map((product) => {
        if (isSameProduct(product)) product.quantity++;
        return product;
      });

      dispatch({ type, payload: updatedProducts });
    };

    const updateCartQuantity = (product: ICartProduct) => {
      dispatch({ type: '[Cart] - Update quantity', payload: product });
    };

    const removeCartProduct = (productToDelete: ICartProduct) => {
      const payload = state.cart.filter(
        (product) => !(product._id === productToDelete._id && product.size === productToDelete.size)
      );
      dispatch({ type: '[Cart] - Update products in cart', payload });
    };

    return { ...state, addProductToCart, updateCartQuantity, removeCartProduct };
  }, [state]);

  return <CartContext.Provider value={contextProviderValue}>{children}</CartContext.Provider>;
};
