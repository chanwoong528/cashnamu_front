/** @type {import('next').NextConfig} */
const path = require('path');
const withImages = require("next-images");

const nextConfig = {
  experimental: {
    appDir: true,
    images: {
      allowFutureImage: true
    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "img.linkprice.com", "*"
    ],
  },
}
module.exports = withImages();
module.exports = nextConfig
