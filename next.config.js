/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TMDB_API_URL: process.env.TMDB_API_URL,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_MEDIA_URL: process.env.TMDB_MEDIA_URL,
  },
}

module.exports = nextConfig
