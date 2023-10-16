import { Entry } from "@/interfaces";
import { EntriesState } from ".";

type EntriesActionType =
  | { type: "[Entries] - Add"; payload: Entry }
  | { type: "[Entries] - Remove"; id: string }
  | { type: "[Entries] - Update"; payload: Entry }
  | { type: "[Entries] - Refresh"; payload: Entry[] };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case "[Entries] - Add":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "[Entries] - Update":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };
    case "[Entries] - Refresh":
      return {
        ...state,
        entries: [...action.payload],
      };

    default:
      return state;
  }
};
