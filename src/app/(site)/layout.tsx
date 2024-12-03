import Nav from '@/components/Nav/nav';
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
      <Nav />
      {children}
    </>
  );
}
