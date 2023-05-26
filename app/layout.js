import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Let's cake",
  description: 'We sell a selection of traditional and fantasy cakes',
};

export default function RootLayout({ children }) {
  const cakeQuantityCookie = getCookie('cart');

  // get the same as an array of objects
  const cakeQuantities = !cakeQuantityCookie
    ? []
    : parseJson(cakeQuantityCookie);

  const totalQuantity = cakeQuantities.reduce((acc, currentValue) => {
    return acc + currentValue.quantity;
  }, 0);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/cart" data-test-id="cart-link">
              Shopping cart
              <span data-test-id="cart-count">{`(${totalQuantity})`}</span>
            </Link>
          </nav>
          {children}
        </header>
      </body>
    </html>
  );
}
