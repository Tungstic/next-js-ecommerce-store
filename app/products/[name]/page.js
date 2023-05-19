import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getWordById } from '../../../database/words';

// export const dynamic = 'force-dynamic';

export default function WordPage({ params }) {
  // const singleWord = getWordById(Number(params.id)); // Convert the string into a number

  /*  console.log(singleWord);

  if (!singleWord) {
    notFound();
  } */

  return (
    <main>
      <h1>{params.name}</h1>
      <Image src={`/${params.name}.png`} width={200} height={100} />
      this is a page for the word {params.name}
    </main>
  );
}
