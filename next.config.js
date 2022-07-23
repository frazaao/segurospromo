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
    locales: ["pt_BR"],
    defaultLocale: "pt_BR",
  },
}

module.exports = nextConfig
