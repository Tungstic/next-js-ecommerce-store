import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cake shop',
  description: 'We offer a selection of traditional and fantasy cakes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Shopping cart</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
