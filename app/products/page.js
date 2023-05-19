import Image from 'next/image';
import Link from 'next/link';
import { words } from '../../database/words';

export default function ProductsPage() {
  return (
    <main>
      <h1>Here are my products</h1>
      <br />
      {words.map((word) => {
        return (
          <div key={`word-div-${word.id}`}>
            <Link
              href={`/products/${word.name}`}
              data-test-id={`product-${word.id}`}
            >
              {word.name}
            </Link>
            <br />
            <Image src={`/${word.name}.png`} width={200} height={100} />
          </div>
        );
      })}
    </main>
  );
}
