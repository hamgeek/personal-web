import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { SmoothScroll } from '@/components/layout';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'], // Tambahkan bobot sesuai kebutuhan
});

export const metadata: Metadata = {
  title: 'hamwebid | portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body className={`${poppins.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
