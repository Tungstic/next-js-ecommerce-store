import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shop for words',
  description: 'We offer a selection of the most beautiful words in English',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link>
          <br />
          <Link href="/products">Products</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
