const { filter } = require("compression");
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const NOTION_API = "https://notion-api.r-bt.workers.dev/v1";
  const id = "489999d5f3d240c0a4fedd9de71cbb6f";

  let pages = [];
  try {
    pages = await fetch(`${NOTION_API}/table/${id}`, {
      headers: { Accept: "application/json" },
    }).then((response) => response.json());
  } catch (e) {
    return { statusCode: 422, body: String(e) };
  }

  const domain = "https://r-bt.com";
  const static = ["/", "/about", "/learning", "/blog", "/links"];

  const filteredPages = pages
    .filter((item) => item.Status === "Visible" && item.slug)
    .map((item) => item.slug);

  // const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  //   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //     ${static
  //       .map(
  //         (page) =>
  //           `
  //         <url>
  //           <loc>${domain}${page}</loc>
  //           <changefreq>weekly</changefreq>
  //         </url>
  //       `
  //       )
  //       .join("")}
  //       ${filteredPages
  //         .map(
  //           (page) =>
  //             `
  //           <url>
  //             <loc>${domain}/${page}</loc>
  //             <changefreq>weekly</changefreq>
  //           </url>
  //         `
  //         )
  //         .join("")}
  //   </urlset>
  // `;

  return {
    statusCode: 200,
    contentType: "text/xml",
    body: "hello there",
  };
};
