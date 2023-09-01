/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== "production";

// sitemap
module.exports = {
  siteUrl: dev ? "http://localhost:3000" : "https://frontendbeast.com/",
  generateRobotsTxt: true,
};
