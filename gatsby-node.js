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
        singlepost : path.resolve("src/templates/single-post.js"),
        taggedPosts: path.resolve("src/templates/tag-posts.js"),
        tagsPage : path.resolve("src/templates/tags-page.js")
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
      
      // Create single blog post
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

      // Get all Tags 
      let tags = []

    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })
    console.log(tags)
    console.log(tagPostCounts)

    tags = _.uniq(tags)

    createPage({
      path: "/tags",
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })
    //Create tag posts Pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.taggedPosts,
        context: {
          tag,
        },
      })
    })

  })
}

  
  
