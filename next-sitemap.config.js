/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ai.windrose.dev',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404']
      }
    ]
  }
};