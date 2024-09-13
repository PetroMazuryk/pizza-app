import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const updateCartTotals = (state) => {
  state.totalPrice = state.items.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  state.totalCount = state.items.reduce((acc, item) => acc + item.count, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, type, size } = action.payload;

      const findItem = state.items.find(
        (item) => item.id === id && item.type === type && item.size === size
      );

      findItem
        ? findItem.count++
        : state.items.push({ ...action.payload, count: 1 });

      updateCartTotals(state);
    },

    minusItem: (state, action) => {
      const { id, type, size } = action.payload;

      const findItem = state.items.find(
        (item) => item.id === id && item.type === type && item.size === size
      );

      if (findItem && findItem.count > 0) findItem.count--;
      updateCartTotals(state);
    },

    removeItem: (state, action) => {
      const { id, type, size } = action.payload;

      state.items = state.items.filter(
        (item) => !(item.id === id && item.type === type && item.size === size)
      );
      updateCartTotals(state);
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
