import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCakeById } from '../../../database/cakes';
import AddToCart from './AddToCart';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default async function CakePage({ params }) {
  const singleCake = await getCakeById(Number(params.cakeId));

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
      <div className={styles.text}>
        <div>{singleCake.description}</div>
        <div data-test-id="product-price">{`Price: €${singleCake.price}`}</div>
        <AddToCart cakeId={singleCake.id} />
      </div>
    </main>
  );
}
