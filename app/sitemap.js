const site = 'https://www.riyadhpropainter.com';

export default function sitemap() {
  const paths = ['', '/services', '/areas/al-arid', '/areas/al-yasmin', '/areas/an-narjis', '/contact'];
  return paths.map((path) => ({ url: `${site}${path}` }));
}
