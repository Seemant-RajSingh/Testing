"use client";

import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/Counter/counterSlice';
import { RootState } from "./GlobalRedux/store";
import Component1 from "@/Components/Component1";
import UserCard from "@/Components/UserCard";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const status = useSelector((state: RootState) => state.user.status); // Access user status from Redux
  const dispatch = useDispatch();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-zinc-900 p-6 sm:p-20 gap-8 font-sans text-gray-800">
      
      <span className="text-2xl font-semibold text-yellow-600">Value: {count}</span>
      
      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 active:bg-red-700 transition duration-300"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          className={`px-6 py-3 ${status === "ADMIN" ? 'bg-green-500' : 'bg-gray-500'} text-white rounded-lg shadow-md hover:${status === "ADMIN" ? 'bg-green-600' : 'bg-gray-600'} active:${status === "ADMIN" ? 'bg-green-700' : 'bg-gray-700'} transition duration-300`}
          onClick={() => status === "ADMIN" && dispatch(incrementByAmount(11))}
          disabled={status !== "ADMIN"} 
        >
          Inc by 11
        </button>
      </div>

      <div className="flex gap-8">
        <Component1 />
        <UserCard />
      </div>

    </div>
  );
}
