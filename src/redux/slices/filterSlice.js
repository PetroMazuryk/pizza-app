import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterSearch: '',
  categoryId: 0,
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
  },
});

export const { changeFilterSearch, setCategoryId, setSortType } =
  filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
