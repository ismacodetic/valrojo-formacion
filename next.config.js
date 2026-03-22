/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/valrojo-formacion',
  assetPrefix: '/valrojo-formacion/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
