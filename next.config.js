/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["apple.co", "www.gravatar.com", "ui-avatars.com"],
  },
};

module.exports = nextConfig;
