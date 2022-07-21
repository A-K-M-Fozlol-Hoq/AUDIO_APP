import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:3000');
    return response.json();
  }
);

// pending, fulfilled, rejection

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status - 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {},
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});
