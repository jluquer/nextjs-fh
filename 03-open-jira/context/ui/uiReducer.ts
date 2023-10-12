import { UIState } from ".";

type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "[Entries] - Set isAddingEntry"; payload: boolean }
  | { type: "[Entries] - Set isDragging"; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "UI - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    case "[Entries] - Set isAddingEntry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    case "[Entries] - Set isDragging":
      return {
        ...state,
        isDragging: action.payload,
      };

    default:
      return state;
  }
};
