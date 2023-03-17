import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//to fetch the data from my backend API
//use async/await and axios
//name it anything i like
//name the parameter name of the productsSlice "products" and / name oft the fetch
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get("http://localhhost:5000/products");
    return response?.data;
  }
);

const initialState = {
  items: [],
  status: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default productsSlice.reducer;
