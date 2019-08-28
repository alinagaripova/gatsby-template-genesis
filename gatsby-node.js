/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async function({ actions, graphql, reporter }) {
    const { data } = await graphql(`
    {
      allMarkdownRemark(sort: {fields: [frontmatter___order], order: DESC}) {
        edges {
          node {
            frontmatter {
               path
            }
          }
        }
      }
}

  `)
    data.allMarkdownRemark.edges.forEach(edge => {
        const url = edge.node.frontmatter.path
        actions.createPage({
            path: url,
            component: path.resolve(`./src/templates/projectTemplate.js`),
            context: { slug: url },
        })
    })
}
