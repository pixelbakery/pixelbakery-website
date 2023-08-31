module.exports = {
  siteUrl: 'https://pixelbakery.com',
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: [
    '/store/checkout',
    '/store/cart',
    '/store/checkout/order-confirmed',
    '/careers/submitted',
    '/careers/application',
    '/hooray',
    '/email-generator',
    '/zoom',
    '/book',
  ],
  additionalPaths: async () => {
    const result = []

    // all possible values
    result.push(
      {
        loc: '/store/product/wavy-hoodie',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/store/product/tiny-sticker-pack',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/store/product/lincoln-flag-pin',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/store/product/long-sleeve-tshirt',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/store/product/black-mug',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/store/product/mug-white',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/store/product/short-sleeve-pride-tee',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/store/product/queer-tote',
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
    )

    // using transformation from the current configuration
    // result.push(await config.transform(config, '/additional-page-3'))

    return result
  },
}
