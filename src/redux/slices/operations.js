import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_API_TEST;

// export const fetchPizzas = createAsyncThunk(
//   'pizzas/fetchAll',
//   async (filterSearch, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/items', {
//         params: {
//           search: filterSearch || '',
//         },
//       });
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchAll',
  async ({ category }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/items?${category}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPizzasByCategory = createAsyncThunk(
  'pizzas/fetchByCategory',
  async ({ category, order, sortBy, page = 1, limit = 8 }, thunkAPI) => {
    try {
      const { data } = await axios.get('/items', {
        params: {
          category,
          order,
          sortBy,
          page,
          limit,
        },
      });

      return {
        pizzas: data.items,
        totalCount: data.totalCount,
        totalPages: Math.ceil(data.totalCount / limit),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
