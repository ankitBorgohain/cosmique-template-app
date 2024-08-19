import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

export const fetchTempleFeed = createAsyncThunk(
  'templeFeed/fetchTempleFeed',
  async () => {
    // const response = await axios.get('https://api.example.com/temple-feed');
    const response = await fetch('https://api.example.com/temple-feed');
    return response.data;
  }
);

const templeFeedSlice = createSlice({
  name: 'templeFeed',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTempleFeed.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTempleFeed.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTempleFeed.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default templeFeedSlice.reducer;