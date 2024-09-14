export const selectPizzas = (state) => state.pizzas.items;
export const selectAllItems = (state) => state.pizzas.allItems;
export const selectIsLoading = (state) => state.pizzas.isLoading;
export const selectError = (state) => state.pizzas.error;

export const selectFilter = (state) => state.filters.filterSearch;

export const selectCategoryId = (state) => state.filters.categoryId;

export const selectSortType = (state) => state.filters.sort;

export const selectCurrentPage = (state) => state.filters.page;
export const selectCountPage = (state) => state.filters.countPage;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectTotalCount = (state) => state.cart.totalCount;
