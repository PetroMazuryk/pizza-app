import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizzas, fetchPizzasByCategory } from './operations';

interface IPizza {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  types: number[];
  sizes: number[];
  rating: number;
}

interface IPizzaSlice {
  items: IPizza[];
  allItems: IPizza[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IPizzaSlice = {
  items: [],
  allItems: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: IPizzaSlice) => {
  state.isLoading = true;
};

const handleRejected = (
  state: IPizzaSlice,
  action: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload || 'Something went wrong';
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchPizzas.pending, handlePending)
      .addCase(
        fetchPizzas.fulfilled,
        (state, action: PayloadAction<IPizza[]>) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addCase(fetchPizzas.rejected, handleRejected)

      .addCase(fetchPizzasByCategory.pending, handlePending)
      .addCase(
        fetchPizzasByCategory.fulfilled,
        (state, action: PayloadAction<IPizza[]>) => {
          state.isLoading = false;
          state.allItems = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchPizzasByCategory.rejected, handleRejected);
  },
});

export const pizzasReducer = pizzasSlice.reducer;
