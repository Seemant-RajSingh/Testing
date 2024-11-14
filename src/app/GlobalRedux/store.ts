"use client";

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Features/Counter/counterSlice';
import userReducer from './Features/User/userSlice';  

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,  
    }
});

// typescript support for dispatch and collective state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
