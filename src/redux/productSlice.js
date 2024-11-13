import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../services/api';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => await fetchProducts()
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
