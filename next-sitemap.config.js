/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aheadtech360.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/studio', '/studio/*', '/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/api'],
      },
    ],
  },
}
