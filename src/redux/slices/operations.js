import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_API_TEST;

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchAll',
  async ({ category, order, sortBy, page, search }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/items?${category}&sortBy=${sortBy}&${order}&page=${page}&limit=6&${search}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPizzasByCategory = createAsyncThunk(
  'pizzas/fetchByCategory',
  async ({ category, order, sortBy }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/items?${category}&sortBy=${sortBy}&${order}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
