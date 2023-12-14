import Image from 'next/image';
import { IoBrowsersOutline, IoCalculator, IoCartOutline, IoHeartOutline, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItem } from '..';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={30} />,
    title: 'Dashboard',
    subtitle: 'Visualización',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCartOutline size={30} />,
    title: 'Counter',
    subtitle: 'Contador client side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoCalculator size={30} />,
    title: 'Pokemons',
    subtitle: 'Generación estática',
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={30} />,
    title: 'Favoritos',
    subtitle: 'Global State',
  },
];

export function Sidebar() {
  return (
    <div
      id='menu'
      className='bg-gray-900 min-h-screen z-10 text-slate-300 w-[400px] left-0'
    >
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
          <IoLogoReact className='mr-2' />
          <span>Dash</span>
          <span className='text-blue-500'>8</span>.
        </h1>
        <p className='text-slate-500 text-sm'>Manage your actions and activities</p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              className='rounded-full w-8 h-8'
              src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
              alt='User avatar'
              width={50}
              height={50}
            />
          </span>
          <span className='text-sm md:text-base font-bold'>Javier Luque</span>
        </a>
      </div>
      <div id='nav' className='w-full px-6'>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
}
