import Image from 'next/image';
import Link from 'next/link';
import { getCakes } from '../../database/cakes';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const cakes = await getCakes();

  return (
    <main>
      <h1>Here are our cakes</h1>
      <div className={styles.gridOfCakes}>
        {cakes.map((cake) => {
          return (
            <div className={styles.oneCake} key={`word-div-${cake.id}`}>
              <Image
                src={`/${cake.name}.avif`}
                priority
                unoptimized
                width={200}
                height={300}
                alt={`photo of ${cake.name} cake`}
              />
              <Link
                href={`/products/${cake.id}`}
                data-test-id={`product-${cake.id}`}
              >
                {cake.name}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
