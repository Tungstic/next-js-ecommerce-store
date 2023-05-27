import { cache } from 'react';
import { Cake } from '../migrations/1685182858-createTableCakes';
import { sql } from './connect';

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
