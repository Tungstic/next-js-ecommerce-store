import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCakeById } from '../../../database/cakes';

export const dynamic = 'force-dynamic';

export default function CakePage({ params }) {
  const singleCake = getCakeById(Number(params.cakeId));

  console.log(singleCake);

  /*   if (!singleCake) {
    notFound();
  } */

  return (
    <main>
      <h1>{singleCake.name}</h1>
      <Image src={`/${singleCake.name}.jpg`} width={200} height={300} />
      this is a page for the {singleCake.name} cake
    </main>
  );
}
