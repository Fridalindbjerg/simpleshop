/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**",
      },
    ],
  },

  /* config options here */
};

export default nextConfig;
