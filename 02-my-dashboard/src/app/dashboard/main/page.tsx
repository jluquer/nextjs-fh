import { WidgetsGrid } from '@/components';

export default function MainPage() {
  return (
    <div className='text-black p-10'>
      <h1 className='text-3xl'>Dashboard</h1>
      <span className='text-xl'>Información general</span>

      <WidgetsGrid className='mt-5 p-2 justify-center' />
    </div>
  );
}
