import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.withCredentials = true;
/* sign up action creator */
export const signUp = createAsyncThunk("auth/signUp", async (body) => {
  const res = await axios.post(
    "http://localhost:5000/BlogApi/users/signup",
    body,
    {
      withCredentials: false,
    }
  );
  return res;
});
/* login action creatore */
export const SignIn = createAsyncThunk("Auth/SignIn", async (body) => {
  const res = await axios.post(
    "http://localhost:5000/BlogApi/users/login",
    body,
    {
      withCredentials: false,
    }
  );
  return res;
});

export const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    isloading: false,
    user: "",
    error: "",
  },
  /* add reducers  */
  reducers: {
    adduser: (state) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state) => {
      state.token = null;
      localStorage.clear();
    },
  },
  /* add extra reducers for asynchrounous data fetching */
  extraReducers: (builder) => {
    /* SignIn */
    builder.addCase(SignIn.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(SignIn.fulfilled, (state, action) => {
      state.isloading = false;
      state.user = action.payload;
    });
    builder.addCase(SignIn.rejected, (state) => {
      state.isloading = false;
    });
    /* Sign UP */
    builder.addCase(signUp.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isloading = false;
      state.user = action.payload;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.isloading = false;
    });
  },
});
/* export the action types to the external */
export const { addToken, adduser, logout } = AuthSlice.actions;
/* export the reducer to external use */
export default AuthSlice.reducer;
