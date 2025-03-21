import { configureStore } from '@reduxjs/toolkit';
import ApiReducer from '../Features/ApiReducer';

export const store = configureStore({
  reducer: {
    users: ApiReducer,  
  },
});

export default store;
