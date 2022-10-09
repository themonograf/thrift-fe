/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["ui-avatars.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
