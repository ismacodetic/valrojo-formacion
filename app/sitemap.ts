import { MetadataRoute } from 'next'

const SITE_URL = 'https://valrojoformacion.es'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
