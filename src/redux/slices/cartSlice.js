import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);

      state.totalCount = state.items.reduce((acc, item) => {
        return acc + item.count;
      }, 0);
    },

    minusItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );

      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );

      state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0);
    },

    clearItems: (state) => {
      state.items = initialState.items;
      state.totalPrice = initialState.totalPrice;
      state.totalCount = initialState.totalCount;
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
