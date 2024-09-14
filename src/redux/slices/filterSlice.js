import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzasByCategory } from './operations';

const initialState = {
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
    changeFilterSearch: (state, action) => {
      state.filterSearch = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sort = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
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

export const { changeFilterSearch, setCategoryId, setSortType, setPage } =
  filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
