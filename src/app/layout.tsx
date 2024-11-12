import type { Metadata } from 'next';
import '../styles/index.scss';

// TODO: Async fetch metadata
export const metadata: Metadata = {
  title: 'Anton Axell',
  description: 'Portfolio page of Architect Anton Axell',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
