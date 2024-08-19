import { configureStore } from '@reduxjs/toolkit';
import horoscopeReducer from '../features/horoscopeSlice';
import templeFeedReducer from '../features/templeFeedSlice';

export const store = configureStore({
  reducer: {
    horoscope: horoscopeReducer,
    templeFeed: templeFeedReducer,
  },
});