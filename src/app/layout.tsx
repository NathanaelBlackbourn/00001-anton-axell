import registerGSAPPlugins from '@/lib/registerGSAPPlugins';
import '../styles/_globals.scss';
import { Source_Serif_4, IBM_Plex_Mono } from 'next/font/google';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
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
  registerGSAPPlugins();

  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
