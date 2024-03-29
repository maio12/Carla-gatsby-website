const path = require('path');

// module.exports.onCreateNode = ({node, actions}) => {
//   const {createNodeField} = actions

//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = path.basename(node.fileAbsolutePath, '.md')
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //get path to template, the resolve func adds all before the relative path to make it an absolute path
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const res = await graphql(`
  query {
    allContentfulBlogPost {
      edges {
        node {
          slug
        }
      }
    }
  }
`)
//this runs twice and creates two pages
res.data.allContentfulBlogPost.edges.forEach((edge) => {
  createPage({
    component: blogTemplate,
    path: `/blog/${edge.node.slug}`,
    context: {
      slug: edge.node.slug
    }
  })
})
}