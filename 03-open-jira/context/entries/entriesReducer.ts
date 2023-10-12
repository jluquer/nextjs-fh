import { Entry } from "@/interfaces";
import { EntriesState } from ".";

type EntriesActionType = 
 | { type: "[Entries] - Add"; payload: Entry }
 | { type: "[Entries] - Remove"; id: string }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case "[Entries] - Add":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    default:
      return state;
  }
};
