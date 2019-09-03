/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const {createPage} = actions;
    const projectsData = graphql(`
        {
          projects: allMarkdownRemark(sort: {fields: [frontmatter___order], order: DESC}, filter: {frontmatter: {name: {eq: "project"}}}) {
            edges {
              node {
                frontmatter {
                   path
                }
              }
            }
          }
        }
  `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        result.data.projects.edges.forEach(edge => {
            const url = edge.node.frontmatter.path
            createPage({
                path: url,
                component: path.resolve(`./src/templates/projectTemplate.js`),
                context: {slug: url},
            })
        })
    });
    const articlesData = graphql(`
        {
          articles: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {name: {eq: "article"}}}) {
            edges {
              node {
                frontmatter {
                   path
                }
              }
            }
          }
        }
  `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        // Create blog pages
        result.data.articles.edges.forEach(edge => {
            const url = edge.node.frontmatter.path
            createPage({
                path: url,
                component: path.resolve(`./src/templates/articleTemplate.js`),
                context: {slug: url},
            })
        })
    });
    return Promise.all([projectsData, articlesData]);
}
