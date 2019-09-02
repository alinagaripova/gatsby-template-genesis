/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async function({ actions, graphql, reporter }) {
    const { data } = await graphql(`
    {
      allMarkdownRemark(sort: {fields: [frontmatter___order], order: DESC}, filter: {frontmatter: {name: {eq: "project"}}}) {
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
exports.createPages = async function({ actions, graphql, reporter }) {
    const { data } = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {name: {eq: "article"}}}) {
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
            component: path.resolve(`./src/templates/articleTemplate.js`),
            context: { slug: url },
        })
    })
}
