/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.dummyjson.com",
      },
      {
        hostname: "upload.wikimedia.org",
      },
      {
        hostname: "down-id.img.susercontent.com",
      },
      {
        hostname: "cf.shopee.co.id",
      },
      {
        hostname: "deo.shopeemobile.com",
      },
      {
        hostname: "icons.iconarchive.com",
      },
    ],
  },
};

export default nextConfig;
