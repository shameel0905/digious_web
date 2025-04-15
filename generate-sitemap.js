const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// Array of your website's URLs
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/case-studies', changefreq: 'monthly', priority: 0.8 },
  { url: '/case-studies/autowriter', changefreq: 'monthly', priority: 0.8 },
  // Add more URLs as needed
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