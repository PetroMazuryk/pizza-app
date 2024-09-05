import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas, fetchPizzasByCategory } from './operations';

const initialState = {
  items: [],
  allItems: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, handlePending)
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, handleRejected)

      .addCase(fetchPizzasByCategory.pending, handlePending)
      .addCase(fetchPizzasByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allItems = action.payload;
        state.error = null;
      })
      .addCase(fetchPizzasByCategory.rejected, handleRejected);
  },
});

export const pizzasReducer = pizzasSlice.reducer;
