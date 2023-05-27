import { Sql } from 'postgres';

export type Cake = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE cakes (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(30) NOT NULL,
    price integer NOT NULL,
    description varchar(900) NOT NULL
  )
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE cakes
  `;
}
