/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "scontent-sjc3-1.cdninstagram.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    INSTAGRAM_ID: process.env.INSTAGRAM_ID,
    INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
  },
};

module.exports = nextConfig;
