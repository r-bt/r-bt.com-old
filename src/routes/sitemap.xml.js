const fetch = require("node-fetch");
export async function get(req, res) {
  const NOTION_API = "https://notion-api.splitbee.io/v1/";
  const id = "489999d5f3d240c0a4fedd9de71cbb6f";

  let pages = [];
  try {
    pages = await fetch(`${NOTION_API}/table/${id}`, {
      headers: { Accept: "application/json" },
    }).then((response) => response.json());
  } catch (e) {
    res.end(JSON.stringify(e));
    return;
  }

  const domain = "https://r-bt.com";

  const filteredPages = pages
    .filter((item) => item.Status === "Visible" && item.slug !== undefined)
    .map((item) => item.slug);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${["/", "/about", "/learning", "/blog", "/links"]
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
        ${filteredPages
          .map(
            (page) =>
              `
            <url>
              <loc>${domain}/learning/${page}</loc>
              <changefreq>weekly</changefreq>
            </url>
          `
          )
          .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "application/xml");
  res.end(sitemap);
}
