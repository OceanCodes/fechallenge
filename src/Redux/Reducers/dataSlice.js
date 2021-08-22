import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../Services/requests";

export const fetchData = createAsyncThunk(
  "data/fetchDataStatus",
  async (dataObj, thunkAPI) => {
    const { type, page } = dataObj;
    try {
      const res = await getData(type, page);
      return { data: res.data, type: type };
    } catch (error) {
      console.error();
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  users: {
    data: [],
    status: null,
    error: null,
  },
  reviewers: {
    data: [],
    status: null,
    error: null,
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.users.status = "loading";
      state.reviewers.status = "loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      if (action.payload.type === "users") {
        state.users.status = "succeeded";
        state.users.data = [...state.users.data, ...action.payload.data];
      }
      if (action.payload.type === "reviewers") {
        state.reviewers.status = "succeeded";
        state.reviewers.data = [
          ...state.reviewers.data,
          ...action.payload.data,
        ];
      }
    },
    [fetchData.rejected]: (state, action) => {
      if (action.payload.type === "users") {
        state.users.status = "failed";
        state.users.error = action.error.message;
      }
      if (action.payload.type === "reviewers") {
        state.reviewers.status = "failed";
        state.reviewers.error = action.error.message;
      }
    },
  },
});

export default dataSlice.reducer;
