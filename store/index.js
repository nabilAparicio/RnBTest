import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slice/Search.slice";
export default configureStore({
  reducer: {
    SearchSlice,
  },
});
