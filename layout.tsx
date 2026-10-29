import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import SmoothScroll from '@/components/SmoothScroll';
export const metadata: Metadata = {
  title: 'Delvyn Vederick | Business Management',
  description: 'Portfolio personal Delvyn Vederick, siswa yang tertarik pada bidang bisnis dan manajemen.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" suppressHydrationWarning><body><Providers><SmoothScroll />{children}</Providers></body></html>;
}
