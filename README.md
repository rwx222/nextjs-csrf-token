This project is a code example where the `@edge-csrf/core` library is implemented along with `Next.js` to generate and validate `CSRF tokens`.

Important files:

- `/src/constants.ts`
- `/src/middleware.ts`
- `/src/app/page.tsx`
- `/src/app/components/Login/Login.tsx`
- `/src/app/api/login/route.ts`
- `/src/utils/csrfTokens.ts`
- `/src/actions/deleteCsrfCookieAction.ts`

## Run the project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`yarn create next-app`](https://www.npmjs.com/package/create-next-app).

Install dependencies

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
