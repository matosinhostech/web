const path = require("path")

const {
  siteMetadata: { partners },
} = require("./gatsby-config.js")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  partners.forEach((partner) => {
    createPage({
      path: `partners/${partner.slug}`,
      component: path.resolve(`./src/templates/partner.js`),
      context: partner,
    })
  })
}
