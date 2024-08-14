export const selectPizzas = (state) => state.pizzas.items;
export const selectIsLoading = (state) => state.pizzas.isLoading;
export const selectError = (state) => state.pizzas.error;

export const selectFilter = (state) => state.filters.filterSearch;

export const selectCategoryId = (state) => state.filters.categoryId;

export const selectSortType = (state) => state.filters.sort;

export const selectPageCount = (state) => state.filters.pageCount;
