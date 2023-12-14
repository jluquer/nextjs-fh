'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, subtractOne } from '@/store/counter/counterSlice';

interface Props {
  value?: number;
}

export function CartCounter({ value = 0 }: Props) {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <span className='text-9xl'>{count}</span>
      <div className='flex gap-2'>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]'
          onClick={() => dispatch(subtractOne())}
        >
          -1
        </button>
        <button
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]'
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
      </div>
    </>
  );
}
