import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_API_TEST;

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/items`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
