'use client';

import { useState } from 'react';

interface Props {
  value?: number;
}

export function CartCounter({ value = 0 }: Props) {
  const [count, setCount] = useState(value);

  return (
    <>
      <span className='text-9xl'>{count}</span>
      <div className='flex gap-2'>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]'
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]'
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
      </div>
    </>
  );
}
