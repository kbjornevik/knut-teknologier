/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { slugify } = require("./src/util/utilityFunctions")
const path = require("path")
const _ = require("lodash")

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === "MarkdownRemark") {
      const slugFromTitle = slugify(node.frontmatter.title)
      createNodeField({
        node,
        name: "slug",
        value: slugFromTitle,
      })
    }
  }


 exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const templates = {
        singlepost : path.resolve("src/templates/single-post.js")
    }
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                author
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(res => {
      if (res.errors) return Promise.reject(res.errors)
  
      const posts = res.data.allMarkdownRemark.edges
      
      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: templates.singlepost,
          context: {
            // passing slug for template to get post
            slug: node.fields.slug
            // find author imageUrl from authors and pass it to the single post template
         
          },
        })
      })
    })
}

  
  
