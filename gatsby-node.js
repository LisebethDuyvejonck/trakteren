const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulTreat {
          edges {
            node {
              id: contentful_id
              to
              from
              message {
                message
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.allContentfulTreat.edges.forEach(({ node }) => {
    createPage({
      path: `traktatie/${node.id}`,
      component: path.resolve(`./src/templates/traktatie.js`),
      context: {
        id: node.id,
        // message: node.message.message,
        from: node.from,
        to: node.to
      },
    })
  })
}
