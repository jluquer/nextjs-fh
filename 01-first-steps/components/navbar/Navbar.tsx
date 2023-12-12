import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '@/components';

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

export function Navbar() {
  return (
    <nav className='m-2 flex gap-2 rounded bg-blue-800 bg-opacity-30 p-2'>
      <Link
        href={'/'}
        className='flex items-center gap-1'
      >
        <HomeIcon />
        <span>Home</span>
      </Link>
      <div className='flex-1'></div>
      {navItems.map((navItem) => (
        <ActiveLink
          key={navItem.path}
          {...navItem}
        />
      ))}
    </nav>
  );
}
