import { DisableDraftMode } from '@/components/DisableDraftMode/DisableDraftMode';
import Header from '@/components/Header/Header';
import { CursorProvider } from '@/lib/contexts/CursorContext';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { HEADER_QUERY } from '@/sanity/queries/headerQuery';
import { Metadata } from 'next';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import classes from './layout.module.scss';

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
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </>
  );
}
