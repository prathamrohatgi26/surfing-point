import { site } from '@/lib/site';

// Section anchors (#services etc.) aren't separate URLs, so only real routes are listed.
export default function sitemap() {
  return [
    {
      url: site.url,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${site.url}/website-development`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
