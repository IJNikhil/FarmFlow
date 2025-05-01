import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

// Configure the Redux store
export const store = configureStore({
    reducer: {
        auth: authReducer, // Auth reducer managing authentication state
    },
});

// TypeScript types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
