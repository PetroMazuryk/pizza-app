import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './slices/filterSlice';
import { pizzasReducer } from './slices/pizzasSlice';
import { cartReducer } from './slices/cartSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
