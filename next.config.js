/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  apiKey: process.env.NEXT_PUBLIC_OPENAI_SECRET_KEY,
}

module.exports = nextConfig
