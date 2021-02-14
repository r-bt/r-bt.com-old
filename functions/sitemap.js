exports.handler = async (event) => {
  const domain = "https://r-bt.com";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
          <loc>${domain}/</loc>
          <changefreq>weekly</changefreq>
      </url>
    </urlset>
  `;

  return {
    statusCode: 200,
    contentType: "text/xml",
    body: sitemap,
  };
};
