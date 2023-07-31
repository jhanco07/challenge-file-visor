// reducers/myReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};
const filesReducer = createSlice({
  name: 'filesReducer',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = filesReducer.actions;
export default filesReducer.reducer;
