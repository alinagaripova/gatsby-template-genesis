/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

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

        result.data.articles.edges.forEach(edge => {
            const url = edge.node.frontmatter.path
            createPage({
                path: url,
                component: path.resolve(`./src/templates/articleTemplate.js`),
                context: {slug: url},
            })
        })
    });
    const tagsData = graphql(`
        {
          tagsGroup: allMarkdownRemark(limit: 2000, filter: {frontmatter: {name: {eq: "project"}}}) {
            group(field: frontmatter___tags) {
              fieldValue
            }
          }
        }
  `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        result.data.tagsGroup.group.forEach(tag => {
            createPage({
                path: `/${_.kebabCase(tag.fieldValue)}/`,
                component: path.resolve(`./src/templates/tags.js`),
                context: { tag: tag.fieldValue },
            })
        })
    });
    return Promise.all([projectsData, articlesData, tagsData]);
}
