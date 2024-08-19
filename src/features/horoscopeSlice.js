import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

export const fetchHoroscope = createAsyncThunk(
  'horoscope/fetchHoroscope',
  async (sign) => {
    const response = await fetch(`https://api.example.com/horoscope/${sign}`);
    return response.data;
  }
);

const horoscopeSlice = createSlice({
  name: 'horoscope',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHoroscope.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHoroscope.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchHoroscope.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default horoscopeSlice.reducer;