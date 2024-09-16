import { RootState } from '../store';

export const selectPizzas = (state: RootState) => state.pizzas.items;
export const selectAllItems = (state: RootState) => state.pizzas.allItems;
export const selectIsLoading = (state: RootState) => state.pizzas.isLoading;
export const selectError = (state: RootState) => state.pizzas.error;

export const selectFilter = (state: RootState) => state.filters.filterSearch;

export const selectCategoryId = (state: RootState) => state.filters.categoryId;

export const selectSortType = (state: RootState) => state.filters.sort;

export const selectCurrentPage = (state: RootState) => state.filters.page;
export const selectCountPage = (state: RootState) => state.filters.countPage;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectTotalCount = (state: RootState) => state.cart.totalCount;
