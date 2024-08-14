This project is a code example for [a blog](https://dev.to/) where the `@edge-csrf/core` library is implemented along with `Next.js 14` to generate and validate `CSRF tokens`.

Check out [the blog here](https://dev.to/) 👈 to learn more.

Important files:

- `/src/constants.js`
- `/src/middleware.js`
- `/src/app/page.js`
- `/src/app/components/Login/Login.js`
- `/src/app/api/login/route.js`
- `/src/utils/csrfTokens.js`
- `/src/actions/deleteCsrfCookieAction.js`

## Run the project

This is a [Next.js 14](https://nextjs.org/) project bootstrapped with [`yarn create next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Install dependencies

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
