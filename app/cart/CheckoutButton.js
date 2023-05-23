import Link from 'next/link';
import React from 'react';

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Go to checkout
    </a>
  );
});

export default function CheckoutButton() {
  return (
    <Link href="/checkout" passHref legacyBehavior>
      <MyButton />
    </Link>
  );
}
