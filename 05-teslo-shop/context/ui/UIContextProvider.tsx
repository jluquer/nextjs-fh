import { FC, ReactNode, useReducer, createContext } from 'react';
import { uiReducer } from '.';

interface ContextProps {
  isMenuOpen: boolean;
  toggleSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);

export interface UIState {
  isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isMenuOpen: false,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: '[UI] - ToggleMenu' });
  };

  return <UIContext.Provider value={{ ...state, toggleSideMenu }}>{children}</UIContext.Provider>;
};
