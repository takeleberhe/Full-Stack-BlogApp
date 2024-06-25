import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* Fetch product action creator */
export const fetchData = createAsyncThunk("Blog/fetchData", async (body) => {
  try {
    const res = await axios.get("http://localhost:5000/BlogApi/blogs/", body, {
      withCredentials: false,
    });
    const data = await res.data;
    console.log(data);
    return data;
  } catch (error) {
    return console.log(error.message);
  }
});
/* Add Blog Action creator */

export const addBlog = createAsyncThunk("addBlog", async (body) => {
  try {
    const res = await axios.podt(
      "http://localhost:5000/BlogApi/blogs/addblog",
      body,
      {
        withCredentials: false,
      }
    );
    return res;
  } catch (error) {
    return console.log(error.message);
  }
});

export const BlogSlice = createSlice({
  name: "Blog",
  initialState: {
    isloading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    /* Fetch Blog */
    builder.addCase(fetchData.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isloading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isloading = false;
    });
    /* Add Blog */
    builder.addCase(addBlog.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.isloading = false;
      state.data = action.payload;
    });
    builder.addCase(addBlog.rejected, (state) => {
      state.isloading = false;
    });
  },
});
/* export the reducer to external use */
export default BlogSlice.reducer;
