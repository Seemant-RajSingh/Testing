import { RootState } from '@/app/GlobalRedux/store';
import React from 'react';
import { useSelector } from 'react-redux';

const Component1 = () => {
    const count = useSelector((state: RootState) => state.counter.value);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-8 font-sans">
            <h1 className="text-3xl font-semibold mb-4">Component 1</h1>
            <span className="text-5xl font-bold">{count}</span>
        </div>
    );
}

export default Component1;
