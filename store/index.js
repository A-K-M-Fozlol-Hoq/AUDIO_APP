import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  products: productReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  version: 2,
  storage: AsyncStorage,
  blacklist: ['products'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//create store
const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
