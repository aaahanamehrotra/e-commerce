<<<<<<< HEAD
## Getting Started
Create a set up in nextjs with next-auth. In this article we create a demo project with next-auth library
.
### Require `.env` variable for run demo in locally
run the demo in locally or server you need  `.env` variable.


1. secret= ''
2. GITHUB_ID = ''
3. GITHUB_SECRET= ''
4. NEXTAUTH_SECRET = ''
5. NEXTAUTH_URL=http://localhost:3000/

## secret
secret and NEXTAUTH_SECRET is both same. or production you need only NEXTAUTH_SECRET `.env` variable.
Read more about secert
https://next-auth.js.org/warnings#no_secret
How to Genrate the secret using openssl command copy and paste >  
` openssl rand -base64 32 `

```
secret= v7CO-My-Secret-BVZ2kwusMNs=
GITHUB_ID = Iv1-My-Github-Id-f1b
GITHUB_SECRET= a220c-My-Github-Secret-fb9fee6968
```

First, Adding enviment varable in project then start the development server:
=======
# Decagon, Webtales
## Category: 2,
## Using: NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
>>>>>>> 6f6c25a0857451781b81b61f49e23120c9c8f162

```bash
npm run dev
# or
yarn dev
<<<<<<< HEAD
```
=======
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
>>>>>>> 6f6c25a0857451781b81b61f49e23120c9c8f162
