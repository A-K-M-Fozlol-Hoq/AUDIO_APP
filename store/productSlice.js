import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PRODUCT_IMAGE_MAP } from '../data/product-image-map';

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
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'success';
      const { payload } = action;
      payload.products.forEach((product) => {
        product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage;
        product.images = PRODUCT_IMAGE_MAP[product.name].images;
      });
      state.products = payload.products;
      // console.log('ApI response ->', payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const selectStatus = (state) => state.products.status;
export const selectFeaturedProducts = (state) =>
  state.products.products.filter((item) => item.is_featured);
export const selectHeadphones = (state) =>
  state.products.products.filter((item) => item.category === 'headphones');
export const selectEarphones = (state) =>
  state.products.products.filter((item) => item.category === 'earphones');
export const selectSpeakers = (state) =>
  state.products.products.filter((item) => item.category === 'speakers');
export const selectProductIfFeatured = (state) =>
  state.products.products.filter((product) => product.is_featured);
export const selectProductsByCategory = (state, category) =>
  state.products.products.filter((product) => product.category === category);
export const selectProductById = (state, id) =>
  state.products.products.find((product) => product.id === id);

export default productsSlice.reducer;
