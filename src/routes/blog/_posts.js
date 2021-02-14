import all from "./posts/*.md";

const transform = ({ filename, html, metadata }) => {
  const permalink = filename.replace(/\.md$/, "");
  const date = new Date(metadata.date);
  return { ...metadata, filename, html, permalink, date };
};

export const posts = all.map(transform).sort((a, b) => b.date - a.date);

export const findPost = (permalink) =>
  posts.find((post) => post.permalink === permalink);
