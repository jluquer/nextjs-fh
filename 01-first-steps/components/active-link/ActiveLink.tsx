'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import style from './ActiveLink.module.css';

interface Props {
  path: string;
  text: string;
}

export function ActiveLink({ path, text }: Props) {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${pathName === path && style['active-link']}`}
      href={path}
    >
      {text}
    </Link>
  );
}
