import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCakeById } from '../../../database/cakes';
import AddToCart from './AddToCart';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    cakeId: string;
  };
};

export default async function CakePage(props: Props) {
  const singleCake = await getCakeById(Number(props.params.cakeId));

  if (!singleCake) {
    notFound();
  }

  return (
    <main className={styles.cakeCard}>
      <div>
        <h1>{`${singleCake.name} cake`}</h1>
        <Image
          data-test-id="product-image"
          src={`/${singleCake.name}.avif`}
          alt={`the photo of the ${singleCake.name}`}
          priority
          unoptimized
          width={200}
          height={300}
        />
      </div>
      <div className={styles.text}>
        <div style={{ fontSize: '1.2rem' }}>{singleCake.description}</div>
        <div data-test-id="product-price">{singleCake.price}</div>
        <AddToCart cakeId={singleCake.id} />
      </div>
    </main>
  );
}
