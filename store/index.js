import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

//create store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
