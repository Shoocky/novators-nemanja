/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    loader: "custom",
    loaderFile: "imagesLoader.js",
  },
};

module.exports = nextConfig;
