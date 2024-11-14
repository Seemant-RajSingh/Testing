"use client";

import { Provider } from "react-redux";
import { store } from "./store";

// Provider"s" to prevent conflicting issues
export function Providers ({ children }) {
    return (
        <Provider store = {store}>
            {children}
        </Provider>
    )
}