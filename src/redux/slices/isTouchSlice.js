import { createSlice } from '@reduxjs/toolkit';

export const isTouchSlice = createSlice({
  name: 'touch',
  initialState: {
    touch: navigator.maxTouchPoints > 0,
  },
  reducers: {
    set: (state, action) => {
      state.touch = action.payload;
    },
  },
});

export const { set } = isTouchSlice.actions;
export default isTouchSlice.reducer;
