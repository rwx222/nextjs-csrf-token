This project is a code example where the `@edge-csrf/core` library is implemented along with `Next.js` to generate and validate `CSRF tokens`.

Important files:

- `/src/constants.ts`
- `/src/utils/csrfTokens.ts`
- `/src/middleware.ts`
- `/src/actions/deleteCsrfCookieAction.ts`
- `/src/app/api/login/route.ts`
- `/src/app/components/Login/Login.tsx`
- `/src/app/page.tsx`

## Details

👨‍💻 dev.to [post](https://dev.to/rwx222/csrf-tokens-in-nextjs-3mlb).

## Live demo

🚀 Live demo [here](https://csrf-tokens.rwx222.com).

## Run the project

Install dependencies

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
