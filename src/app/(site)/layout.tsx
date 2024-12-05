import HomePageHeader from '@/components/HomePageHeader/HomePageHeader';
import Nav from '@/components/Nav/Nav';
import classes from './layout.module.scss';
import { Metadata } from 'next';

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
      <header className={classes['header']}>
        <HomePageHeader />
        <Nav />
      </header>
      {children}
    </>
  );
}
