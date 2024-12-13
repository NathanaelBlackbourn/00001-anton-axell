import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import classes from './layout.module.scss';
// TODO: Async fetch metadata
export const metadata: Metadata = {
  title: 'Anton Axell',
  description: 'Portfolio page of Architect Anton Axell',
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className={classes['main']}>{children}</main>
    </>
  );
}
