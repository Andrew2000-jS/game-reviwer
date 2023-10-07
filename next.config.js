/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ["media.rawg.io"],
  },
};

module.exports = nextConfig;
