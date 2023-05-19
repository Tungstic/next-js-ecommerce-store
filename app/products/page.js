import Image from 'next/image';
import Link from 'next/link';
import { cakes } from '../../database/cakes';

export default function ProductsPage() {
  return (
    <main>
      <h1>Here are my products</h1>
      <br />
      {cakes.map((cake) => {
        return (
          <div key={`word-div-${cake.id}`}>
            <Link
              href={`/products/${cake.name}`}
              data-test-id={`product-${cake.id}`}
            >
              {cake.name}
            </Link>
            <br />
            <Image src={`/${cake.name}.jpg`} width={200} height={300} />
          </div>
        );
      })}
    </main>
  );
}
