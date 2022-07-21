import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import productReducer from './productSlice';

// create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  products: productReducer,
});

//create store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
