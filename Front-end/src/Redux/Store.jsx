import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthReducer/AuthSlice";
import blogReducer from "./BlogReducer/BlogSlice";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    user: authReducer,
  },
});
