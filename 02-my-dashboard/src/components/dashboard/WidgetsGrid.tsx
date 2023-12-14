'use client';

import { IoCartOutline } from 'react-icons/io5';
import { SimpleWidget } from '..';
import { useAppSelector } from '@/store';
interface Props {
  className?: string;
}
export function WidgetsGrid({ className }: Props) {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <SimpleWidget
        title={`${count}`}
        label='Contador'
        subtitle='Estado del contador'
        icon={<IoCartOutline size={50} className='text-blue-600' />}
        href={'/dashboard/counter'}
      />
    </div>
  );
}
