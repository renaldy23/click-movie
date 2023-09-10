This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Setup

First, create new file named `.env` in root folder

Second, paste this value to the `.env`file
`TMDB_API_URL=https://api.themoviedb.org/3/`
`TMDB_API_KEY=<your access token>`
`TMDB_MEDIA_URL=https://image.tmdb.org/t/p/w500`

Third, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## How to get TMDB API Key

1. Sign up to [TMDB Website](https://https://www.themoviedb.org/)
2. Go to settings on your profile, click API on the menu left side
3. Copy and paste API Read Access Token
