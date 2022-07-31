import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';

// create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  products: productReducer,
  cart: cartReducer,
});

//create store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
