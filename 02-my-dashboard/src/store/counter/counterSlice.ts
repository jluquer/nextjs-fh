import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne(state) {
      state.count++;
    },
    subtractOne(state) {
      if (state.count > 0) state.count--;
    },
    resetCounter(state, { payload }: PayloadAction<number>) {
      if (payload > 0) state.count = payload;
    },
  },
});

export const {addOne, subtractOne, resetCounter} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
