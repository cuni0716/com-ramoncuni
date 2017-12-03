const functions = require('firebase-functions');


exports.sitemap = functions.https.onRequest((req, res) => {
  res.format({ 'text/xml': () => res.send(`
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://ramoncuni.com</loc>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://ramoncuni.com/cv</loc>
        <priority>1.0</priority>
      </url>
    </urlset>
  `) });
});

exports.robots = functions.https.onRequest((req, res) => {
  res.format({ 'text/plain': () => res.send(`
    User-agent: *
    Disallow: /things
  `) });
});
