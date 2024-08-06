export const selectPizzas = (state) => state.pizzas.items;
export const selectIsLoading = (state) => state.pizzas.isLoading;
export const selectError = (state) => state.pizzas.error;

export const selectCategoryId = (state) => state.filters.categoryId;
