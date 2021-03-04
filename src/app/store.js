import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import gamesSlice from './gamesSlice';
import ToastMiddleware from '../middlewares/ToastMiddleware';

export default configureStore({
  reducer: {
    gamesSlice: gamesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware)
});
