import { createContext } from "react";

interface ContextProps {
  sideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  
  isAddingEntry: boolean;
  setIsAddingEntry: (isAdding: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
