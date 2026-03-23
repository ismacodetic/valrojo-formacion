/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isProduction && {
    basePath: '/valrojo-formacion',
    assetPrefix: '/valrojo-formacion/',
  }),
}

module.exports = nextConfig
