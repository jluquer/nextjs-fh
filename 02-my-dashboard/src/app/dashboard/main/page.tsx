import { SimpleWidget } from '@/components';

export default function MainPage() {
  return (
    <div className='text-black p-10'>
      <h1 className='text-3xl'>Dashboard</h1>
      <span className='text-xl'>Información general</span>

      <div className='flex flex-wrap gap-2 mt-5 p-2'>
        <SimpleWidget />
      </div>
    </div>
  );
}
