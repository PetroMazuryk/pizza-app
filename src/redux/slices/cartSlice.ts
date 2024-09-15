import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartItem {
  id: string;
  type: number;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
  title: string;
}

export interface ICartState {
  items: ICartItem[];
  totalPrice: number;
  totalCount: number;
}

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const updateCartTotals = (state: ICartState) => {
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
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const { id, type, size } = action.payload;

      const findItem = state.items.find(
        (item) => item.id === id && item.type === type && item.size === size
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      updateCartTotals(state);
    },

    plusItem: (
      state,
      action: PayloadAction<{ id: string; type: number; size: number }>
    ) => {
      const { id, type, size } = action.payload;

      const findItem = state.items.find(
        (item) => item.id === id && item.type === type && item.size === size
      );

      if (findItem) {
        findItem.count++;
      }

      updateCartTotals(state);
    },

    minusItem: (
      state,
      action: PayloadAction<{ id: string; type: number; size: number }>
    ) => {
      const { id, type, size } = action.payload;

      const findItem = state.items.find(
        (item) => item.id === id && item.type === type && item.size === size
      );

      if (findItem && findItem.count > 0) {
        findItem.count--;
      }

      updateCartTotals(state);
    },

    removeItem: (
      state,
      action: PayloadAction<{ id: string; type: number; size: number }>
    ) => {
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

export const { addItem, minusItem, plusItem, removeItem, clearItems } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
