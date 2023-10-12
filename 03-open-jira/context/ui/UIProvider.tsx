import { FC, ReactNode, useReducer } from "react";
import { UIContext, uiReducer } from ".";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "[Entries] - Set isAddingEntry", payload: isAdding });
  };
  
  const setIsDragging = (isDragging: boolean) => {
    dispatch({ type: "[Entries] - Set isDragging", payload: isDragging });
  };

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu, setIsAddingEntry, setIsDragging }}>
      {children}
    </UIContext.Provider>
  );
};
