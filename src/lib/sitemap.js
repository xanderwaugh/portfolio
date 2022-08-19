/** @type {import('next-sitemap').IConfig} */

// * Next Sitemap Config
module.exports = {
  siteUrl: "https://www.xanderwaugh.com/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  sitemapSize: 7000,
};
