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
 
 exports.createPages =  ({ graphql, actions  }) => {
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
              id
              frontmatter {
                title
                author
                tags
                templateKey
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
        const id = node.id
        const pathslug = `/blog/${node.fields.slug}`;
      //  console.log("CreatePage SingleBlog at Path: ",pathslug)
        var templateKey =  `src/templates/${String(node.frontmatter.templateKey)}.js`
        console.log("CreatePage SingleBlog at Path: ",pathslug, " Templatkey=",templateKey, " Node ID ", id)
        createPage({
          path: `/blog/${node.fields.slug}`,
          component: path.resolve(templateKey)
        ,
          context: {
            // passing slug for template to get post
            slug: node.slug,
            id: node,id,
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
        
        console.log("Antall tagPostCounts: ",tagPostCounts)
      
      //console.log(posts.frontmatter.title)      
      // Create single blog post
     
 
   
    tags = _.uniq(tags)
    console.log("---------------Createing the /tags page -----------")
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
   console.log("Create page for tag:",tag)
  createPage({
    path: `/tag/${Slugify(tag)}`,
    component: templates.taggedPosts,
    context: {
      tag,
    },
  })
  }) // Slutt  tags.forEach


   })
}

  
  
