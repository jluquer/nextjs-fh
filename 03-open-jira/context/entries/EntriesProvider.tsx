import { FC, ReactNode, useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

import { EntriesContext, entriesReducer } from ".";
import { Entry } from "@/interfaces";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "pending - Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vero accusantium, accusamus repudiandae reiciendis dolore consectetur debitis molestiae est voluptatibus nisi delectus quo ex fuga enim a possimus cumque corporis!",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "progress - descripcion 2",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "done - descripcion 3",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

interface Props {
  children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: "pending",
      createdAt: Date.now(),
    };
    dispatch({ type: "[Entries] - Add", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entries] - Update", payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>{children}</EntriesContext.Provider>
  );
};
