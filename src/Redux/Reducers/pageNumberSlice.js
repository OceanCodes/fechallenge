import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNum: 1,
};

export const pageNumberSlice = createSlice({
  name: "pageNumber",
  initialState,
  reducers: {
    setPageNumber: (state) => {
      state.pageNum = state.pageNum + 1;
    },
  },
});

export const { setPageNumber } = pageNumberSlice.actions;

export default pageNumberSlice.reducer;
