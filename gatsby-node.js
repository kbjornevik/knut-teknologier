/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { Slugify } = require("./src/util/utilityFunctions")
const path = require("path")
const _ = require("lodash")

// onCreate node løper for alle filer i prosjektet . Må sjekke hva den gjør med md filer
exports.onCreateNode =  ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === "Mdx") {
      const slugFromTitle = Slugify(node.frontmatter.title)
      console.log('Lager nytt felt Slug from Tile: :', slugFromTitle)
      createNodeField({
        node,
        name: "slug",
        value: slugFromTitle
      })
    }
}


exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Knut Your Gatsby site has been built!`)
}
 
 exports.createPages =  ({ actions, graphql }) => {
    const { createPage } = actions;

    const templates = {
        singlepost : path.resolve("src/templates/single-post.js"),
        taggedPosts: path.resolve("src/templates/tag-posts.js"),
        tagsPage : path.resolve("src/templates/tags-page.js")
    }

    return  graphql(`
      {
        allMdx {
          edges{  
            node {
              slug
              frontmatter {
                title
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

    
    const posts = res.data.allMdx.edges
      // Create single blog post
      posts.forEach(({ node }) => {
        console.log("CreatePage SingleBlog",node.slug)
        createPage({
          path: node.slug,
         
          component: templates.singlepost,
          context: {
            // passing slug for template to get post
            slug: node.slug
            // find author imageUrl from authors and pass it to the single post template
            
          },
        })
      })    
        // Get all Tags 
      let tags = []

       _.each(posts, edges => {
          if (_.get(edges, "node.frontmatter.tags")) {
            tags = tags.concat(edges.node.frontmatter.tags)
          }
        })
        console.log("---------------Posts -----------")
        console.log(tags)

        let tagPostCounts = {}
        tags.forEach(tag => {
          tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
        })
        
        console.log(tagPostCounts)
      
      //console.log(posts.frontmatter.title)      
      // Create single blog post
     

   
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
        path: `/tag/${Slugify(tag)}`,
        component: templates.taggedPosts,
        context: {
          tag,
        },
      })
    })

   })
}

  
  
