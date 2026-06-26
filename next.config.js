/** @type {import('next').NextConfig} */

// El sitio se sirve en la raíz del dominio personalizado valrojoformacion.es
// (configurado vía el archivo public/CNAME), por lo que NO debe usarse
// basePath/assetPrefix. Si en algún momento se deja de usar el dominio
// personalizado y se vuelve a servir solo en
// https://ismacodetic.github.io/valrojo-formacion/, habría que reintroducir
// basePath: '/valrojo-formacion' y assetPrefix: '/valrojo-formacion/'.
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
