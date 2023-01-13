import { createSlice } from "@reduxjs/toolkit";
import { Pages } from "../../json/Pages";
const pagesSlice = createSlice({
  name: "Pages",
  initialState: { Pages },
  reducers: {
    setSearch: (state, action) => action.payload,
  },
});

export const { setpages } = pagesSlice.actions;

export default pagesSlice.reducer;
