import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'SEO description',
  keywords: ['about', 'About Page', 'Fernando', 'información'],
};

export default function AboutPage() {
  return (
      <span className='text-7xl'>About Page</span>
  );
}
