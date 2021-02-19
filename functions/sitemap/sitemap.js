const fetch = require("node-fetch");

exports.handler = async (event) => {
  const NOTION_API = "https://notion-api.r-bt.workers.dev/v1";

  const getNotionTable = (id) => {
    return fetch(`${NOTION_API}/table/${id}`).then((resp) => resp.json());
  };

  const domain = "https://r-bt.com";
  const static = ["/", "/about", "/learning", "/blog", "/links"];

  const learningPages = (
    await getNotionTable("489999d5f3d240c0a4fedd9de71cbb6f")
  )
    .filter((item) => item.Status === "Visible" && item.slug)
    .map((item) => item.slug);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${static
        .map(
          (page) =>
            `
          <url>
            <loc>${domain}${page}</loc>
            <changefreq>weekly</changefreq>
          </url>
        `
        )
        .join("")}
        ${learningPages
          .map(
            (page) =>
              `
            <url>
              <loc>${domain}/${page}</loc>
              <changefreq>weekly</changefreq>
            </url>
          `
          )
          .join("")}
    </urlset>
  `;

  return {
    statusCode: 200,
    contentType: "text/html",
    body: sitemap,
  };
};
