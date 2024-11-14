"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}

const initialState: CounterState ={
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => { state.value += 1; console.log("action.payload: ", action.payload) },
        decrement: (state) => { state.value -= 1 },
        incrementByAmount: (state, action) => {
            state.value += action.payload; 
        }
    }
})

// counterSlice.actions = object created by createSlice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;


// counterSlice.actions: Action creators = functions that create action objects, which can be dispatched (dispatch(incerement()))