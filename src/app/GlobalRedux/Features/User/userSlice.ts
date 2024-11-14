"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    username: string;
    hashed_password: string;
    status: "ADMIN" | "DEV" | "GUEST"; 
    isAdmin: boolean;  
}

const initialState: UserState = {
    username: "john_doe",
    hashed_password: "$2a$10$0X2SecrEtHasHedPAsswoRdSaMplE1234567Xz0",
    status: "GUEST",
    isAdmin: false,
};

export const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        setStatus: (state, action: PayloadAction<"ADMIN" | "DEV" | "GUEST">) => {
            state.status = action.payload;
            state.isAdmin = action.payload === "ADMIN";  
        }
    }
});

export const { setStatus } = userSlice.actions;
export default userSlice.reducer;
