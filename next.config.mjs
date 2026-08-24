/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel per 404 error se bachne ke liye
  trailingSlash: false,

  // Images optimize karne ke liye
  images: {
    unoptimized: false,
    localPatterns: [
      { pathname: "/**" },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Production ke liye console errors hatao
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features
  experimental: {
    // Scroll restoration
    scrollRestoration: true,
  },
};

export default nextConfig;

