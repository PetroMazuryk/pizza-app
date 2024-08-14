import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzasByCategory } from './operations';

const initialState = {
  filterSearch: '',
  categoryId: 0,
  pageCount: 1,
  currentPage: 1,
  totalPages: 1,
  sort: {
    name: 'популярністю',
    value: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilterSearch: (state, action) => {
      state.filterSearch = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sort = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzasByCategory.fulfilled, (state, action) => {
      state.pageCount = Math.ceil(action.payload.totalCount / 8); // Вважаємо, що на сторінці 8 товарів
      state.totalPages = action.payload.totalPages;
    });
  },
});

export const {
  changeFilterSearch,
  setCategoryId,
  setSortType,
  setCurrentPage,
} = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
