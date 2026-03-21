/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/valrojo-formacion',
  assetPrefix: '/valrojo-formacion/',
}

module.exports = nextConfig
