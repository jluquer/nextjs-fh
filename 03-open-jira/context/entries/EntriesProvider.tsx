import { FC, ReactNode, useEffect, useReducer } from "react";

import { EntriesContext, entriesReducer } from ".";
import { Entry } from "@/interfaces";
import { entriesApi } from "@/apis";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface Props {
  children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("");
    dispatch({ type: "[Entries] - Refresh", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("", { description });
    dispatch({ type: "[Entries] - Add", payload: data });
  };

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/${_id}`, {
        description,
        status,
      });
      dispatch({ type: "[Entries] - Update", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
