import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCakeById } from '../../../database/cakes';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default function CakePage({ params }) {
  const singleCake = getCakeById(Number(params.cakeId));

  console.log(singleCake);

  if (!singleCake) {
    notFound();
  }

  return (
    <main className={styles.cakeCard}>
      <div>
        <h1>{`${singleCake.name} cake`}</h1>
        <Image
          data-test-id="product-image"
          src={`/${singleCake.name}.jpg`}
          width={200}
          height={300}
        />
      </div>
      <div className={styles.description}>
        <div>this is a page for the {singleCake.name} cake</div>
        <div data-test-id="product-price">{`price: €${singleCake.price}`}</div>
        <div>Quantity</div>
        <button>Add to cart</button>
      </div>
    </main>
  );
}
