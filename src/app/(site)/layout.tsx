import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import classes from './layout.module.scss';
import { CursorProvider } from '@/lib/contexts/CursorContext';
import { HEADER_QUERY } from '@/sanity/queries/headerQuery';
import { sanityFetch } from '@/sanity/lib/live';

// TODO: Async fetch metadata
export const metadata: Metadata = {
  title: 'Anton Axell',
  description: 'Portfolio page of Architect Anton Axell',
};

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await sanityFetch({
    query: HEADER_QUERY,
  });

  return (
    <>
      <CursorProvider>
        <Header headerData={data} />
        <main className={classes['main']}>{children}</main>
      </CursorProvider>
    </>
  );
}
