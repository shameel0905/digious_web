const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// Array of your website's URLs
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/blog', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/case-studies', changefreq: 'monthly', priority: 0.8 },
  { url: '/case-studies/autowriter', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/graphic-designing', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/website-development', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/ecommerce-solutions', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/game-development', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/mobile-app-development', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/software-development', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/digital-marketing', changefreq: 'weekly', priority: 0.9 },
  { url: '/graphic-portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/website-design-portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/branding-portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/ui-ux-portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/animation-portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/block-chain-portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/what-is-nft-art', changefreq: 'monthly', priority: 0.8 },
  { url: '/how-to-be-a-success-with-search-engine-optimization', changefreq: 'monthly', priority: 0.8 },
  { url: '/if-you-have-forgotten-your-apple-id-password', changefreq: 'monthly', priority: 0.8 },
  { url: '/black-friday-website-design-offer', changefreq: 'weekly', priority: 0.95 },
  { url: '/black-friday-deal', changefreq: 'weekly', priority: 0.95 },
];


// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://digioussolutions.com' });

// Pipe the sitemap to a writable stream
const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));

// Write the URLs to the sitemap
urls.forEach(url => sitemap.write(url));
sitemap.end();

// Save the sitemap to a file
streamToPromise(sitemap).then(() => {
  console.log('Sitemap generated successfully!');
}).catch(err => {
  console.error('Error generating sitemap:', err);
});

sitemap.pipe(writeStream);
