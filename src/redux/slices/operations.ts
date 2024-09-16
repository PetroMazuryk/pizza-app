import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_API_TEST;

interface IFetchPizzasParams {
  category: string;
  order: string;
  sortBy: string;
  page: number;
}

interface IFetchPizzaArgs {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  ingredients: string;
}

export const fetchPizzas = createAsyncThunk<
  IFetchPizzaArgs[],
  IFetchPizzasParams,
  { rejectValue: string }
>('pizzas/fetchAll', async ({ category, order, sortBy, page }, thunkAPI) => {
  try {
    const { data } = await axios.get<IFetchPizzaArgs[]>(
      `/items?${category}&sortBy=${sortBy}&${order}&page=${page}&limit=6`
    );

    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message as string);
  }
});

export const fetchPizzasByCategory = createAsyncThunk<
  IFetchPizzaArgs[],
  Omit<IFetchPizzasParams, 'page'>,
  { rejectValue: string }
>('pizzas/fetchByCategory', async ({ category, order, sortBy }, thunkAPI) => {
  try {
    const { data } = await axios.get<IFetchPizzaArgs[]>(
      `/items?${category}&sortBy=${sortBy}&${order}`
    );

    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message as string);
  }
});
