import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizzasByCategory } from './operations';

export interface ISort {
  name: string;
  value: 'rating' | 'title' | 'price' | '-title' | '-price';
}

interface IFilterSlice {
  filterSearch: string;
  categoryId: number;
  page: number;
  countPage: number;
  sort: ISort;
}

const initialState: IFilterSlice = {
  filterSearch: '',
  categoryId: 0,
  page: 1,
  countPage: 1,
  sort: {
    name: 'популярністю',
    value: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilterSearch: (state, action: PayloadAction<string>) => {
      state.filterSearch = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortType: (state, action: PayloadAction<ISort>) => {
      state.sort = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    clearPage: (state) => {
      state.page = initialState.page;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzasByCategory.fulfilled, (state, action) => {
      state.countPage = Math.ceil(action.payload.length / 6);
      if (state.page > state.countPage) {
        state.page = state.countPage;
      }
    });
  },
});

export const {
  changeFilterSearch,
  setCategoryId,
  setSortType,
  setPage,
  clearPage,
} = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
