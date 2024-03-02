import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
  name: 'likes',
  initialState: {
    likes: {},
  },
  reducers: {
    add: (state, action) => {
      state.likes[action.payload.url] = action.payload.url;
    },
    deleteCard: (state, action) => {
      delete state.likes[action.payload.url];
    },
  },
});

export const { add, deleteCard } = likesSlice.actions;
export default likesSlice.reducer;
