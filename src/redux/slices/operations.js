import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_API_TEST;

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchAll',
  async (filterSearch, thunkAPI) => {
    try {
      const { data } = await axios.get(`/items`, {
        params: {
          search: filterSearch || '',
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
