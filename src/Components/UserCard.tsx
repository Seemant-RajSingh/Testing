"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';
import { setStatus } from '@/app/GlobalRedux/Features/User/userSlice';

const UserCard = () => {
    const { username, hashed_password, status, isAdmin } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const toggleStatus = () => {
        const newStatus = status === "ADMIN" ? "GUEST" : "ADMIN";
        dispatch(setStatus(newStatus));
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-8 font-sans">
            <h1 className="text-3xl font-semibold mb-4">User Card</h1>
            <p className="text-xl font-medium">Username: {username}</p>
            <p className="text-xl font-medium">Pwd: {hashed_password}</p>
            <p className="text-lg font-medium">Status: {status}</p>

            {isAdmin && (
                <div className="mt-4 p-4 bg-blue-100 text-blue-900 rounded-lg">
                    <h2 className="text-2xl font-semibold">Admin Data</h2>
                    <p>Confidential admin data available only to ADMIN users.</p>
                </div>
            )}
            
            <button
                className="mt-4 px-6 py-3 bg-zinc-500 text-white rounded-lg shadow-md hover:bg-zinc-600 active:bg-zinc-700 transition duration-300"
                onClick={toggleStatus}
            >
                {status === "ADMIN" ? "Set Status to GUEST" : "Set Status to ADMIN"}
            </button>
        </div>
    );
};

export default UserCard;
