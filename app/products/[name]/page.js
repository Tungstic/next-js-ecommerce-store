import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCakeById } from '../../../database/cakes';

// export const dynamic = 'force-dynamic';

export default function CakePage({ params }) {
  // const singleWord = getWordById(Number(params.id)); // Convert the string into a number

  /*  console.log(singleWord);

  if (!singleWord) {
    notFound();
  } */

  return (
    <main>
      <h1>{params.name}</h1>
      <Image src={`/${params.name}.jpg`} width={200} height={300} />
      this is a page for the {params.name} cake
    </main>
  );
}
