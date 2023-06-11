# E-Commerce Project with Next.js

This project is built within the [Upleveled](https://upleveled.io/) bootcamp program according to its requirements and guidelines. The e-commerce store is not intended for commercial use and, therefore, has restricted functionality (e.g. no payment feature). All images belong to Deva Williamson and taken from her [Unsplash account](https://unsplash.com/@biglaughkitchen). The text content generated by GhatGPT.

## Screenshots

![HomePage](https://github.com/Tungstic/next-js-ecommerce-store/assets/115181901/596158a9-7cd4-4828-aa5e-49cc2de03c84)
![singleCakePage](https://github.com/Tungstic/next-js-ecommerce-store/assets/115181901/358c3261-df0f-40e6-bfb4-f8dd44f08940)

## List of technologies used

1. Next.js (React, Node.js) including such experimental features as server actions and dynamic routing. The shopping cart uses cookies.
2. SASS modules for CSS.
3. Typescript.
4. PostgreSQL and Ley.
5. Playwright.
6. Jest.
7. Deployment: Fly.io (main branch), Vercel (vercel-deploy branch).

## How to set it up

To initialize the repository, run:
`pnpm install`

To start the localhost, run:
`pnpm dev`

Simultaneously, run Postgres localhost for the database.

## Deployment (only for Vercel since Fly.io offers insufficient resources)

1. Create an account in Vercel.
2. Create a postgres storage in Vercel (select Frankfurt).
3. Create a project in Vercel.
   - Override the install command with `pnpm install && pnpm migrate up`
4. Connect storage with project in Project > Storage > Connect.
5. Deploy (every push to GitHub will automatically re-deploy).
