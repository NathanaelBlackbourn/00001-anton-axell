import '../styles/globals.scss';
import {
  Source_Serif_4,
  IBM_Plex_Mono,
  Cormorant_Garamond,
} from 'next/font/google';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${sourceSerif.variable} 
        ${cormorantGaramond.variable} 
        ${ibmPlexMono.variable}
      `}
    >
      <body>{children}</body>
    </html>
  );
}
