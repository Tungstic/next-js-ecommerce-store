import { cache } from 'react';
import { Cake } from '../migrations/1685182858-createTableCakes';
import { sql } from './connect';

/* export const cakes = [
  { id: 1, name: 'cherry', price: 35, description: cherryCakeDescription },
  {
    id: 2,
    name: 'chocolate',
    price: 40,
    description: chocolateCakeDescription,
  },
  { id: 3, name: 'easter', price: 45, description: easterCakeDescription },
  { id: 4, name: 'macaroon', price: 45, description: macaroonCakeDescription },
  { id: 5, name: 'oreo', price: 30, description: oreoCakeDescription },
  { id: 6, name: 'cat', price: 45, description: catCakeDescription },
]; */

/* export function getCakeById(id) {
  return cakes.find((cake) => cake.id === id);
} */

export const getCakes = cache(async () => {
  const cakes = await sql<Cake[]>`
    SELECT * FROM cakes
 `;
  return cakes;
});

export const getCakeById = cache(async (id: number) => {
  const [cake] = await sql<Cake[]>`
    SELECT
      *
    FROM
      cakes
    WHERE
      id = ${id}
  `;
  return cake;
});
