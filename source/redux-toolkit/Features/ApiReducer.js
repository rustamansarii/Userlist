import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import lib from '../../apis/lib';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${lib.apiUrl}/users?_page=${page}&_limit=${limit}`);
      if (!response.ok) throw new Error('Failed to fetch users');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  users: [],
  loading: false,
  error: null,
  currentPage: 1,
  limit: 5,
};

const ApiReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
    
        if (action.meta.arg.page === 1) {
        
          state.users = action.payload;
        } else {
  
          state.users = [...state.users, ...action.payload];
        }
        
        if (action.meta.arg.page !== 1) {
          state.currentPage += 1;
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = ApiReducer.actions;
export default ApiReducer.reducer;
