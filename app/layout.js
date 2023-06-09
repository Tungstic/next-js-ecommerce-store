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

  const totalQuantity = cakeQuantities?.reduce((acc, currentValue) => {
    // returns a number
    return acc + currentValue.quantity;
  }, 0);

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: 'rgb(234, 235, 237)' }}
      >
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/products" data-test-id="products-link">
              Products
            </Link>
            <Link href="/cart" data-test-id="cart-link">
              Shopping cart
              {/*     <span
                aria-label="number of cakes in the cart"
                data-test-id="cart-count"
              >{`(${totalQuantity})`}</span> */}
            </Link>
            <span
              aria-label="number of cakes in the cart"
              data-test-id="cart-count"
            >
              {totalQuantity}
            </span>
          </nav>
          {children}
        </header>

        <footer>
          <hr />
          <div>
            <div>
              <p>Address: Belgard Rd, Tallaght, Dublin 24, D24 X2FC, Ireland</p>
              <p>Phone: +353 1 462 4200</p>
              <p>Email: info@letscake.ie</p>
            </div>
            <div>Opening hours: Mon-Fri, 9:00 - 18:00</div>
            <div>Copyright © 2023 Let's cake. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
