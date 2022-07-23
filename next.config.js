/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    images: {
      unoptimized: true
    }
  },
  i18n: {
    locales: ["pt"],
    defaultLocale: "pt",
  },
}

module.exports = nextConfig
