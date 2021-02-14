// const fetch = require("node-fetch");
const fs = require("fs");
//Change 123

const NOTION_API = "https://notion-api.r-bt.workers.dev/v1";

const getNotionTable = (id) => {
  return fetch(`${NOTION_API}/table/${id}`).then((resp) => resp.json());
};

exports.handler = async (event) => {
  // const domain = "https://r-bt.com";

  // const static = ["/", "/about", "/learning", "/blog", "/links"];

  // const learningPages = (
  //   await getNotionTable("489999d5f3d240c0a4fedd9de71cbb6f")
  // )
  //   .filter((item) => item.Status === "Visible" && item.slug)
  //   .map((item) => item.slug);

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
  //       ${learningPages
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

  const sitemap = await new Promise((resolve) => {
    fs.readdir(__dirname, (err, files) => {
      resolve(files.join(","));
    });
  });

  return {
    statusCode: 200,
    contentType: "text/html",
    body: sitemap,
  };
};
