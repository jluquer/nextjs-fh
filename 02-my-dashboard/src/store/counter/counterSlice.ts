import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 0,
  isReady: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, { payload }: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = payload;
      state.isReady = true;
    },
    addOne(state) {
      state.count++;
    },
    subtractOne(state) {
      if (state.count > 0) state.count--;
    },
    resetCount(state, { payload }: PayloadAction<number>) {
      if (payload >= 0) state.count = payload;
    },
  },
});

export const { addOne, subtractOne, resetCount, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;
