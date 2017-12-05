const _ = require('lodash');
const path = require('path');
const slash = require('slash');

exports.modifyBabelrc = ({ babelrc }) => {
  if (process.env.NODE_ENV !== `production`) {
    return {
      presets: [require.resolve('babel-preset-flow')].concat(babelrc.presets),
      plugins: [
        [require.resolve(`babel-plugin-emotion`), { sourceMap: true }]
      ].concat(babelrc.plugins),
    }
  }
  return {
    presets: [require.resolve('babel-preset-flow')].concat(babelrc.presets),
    plugins: [require.resolve(`babel-plugin-emotion`)].concat(babelrc.plugins),
  }
};

// Will create pages for Wordpress pages (route : /{slug})
// Will create pages for Wordpress posts (route : /post/{slug})
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Wordpress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve(`./src/templates/page.js`)
        result.data.allWordpressPage.edges.forEach(edge => {
          const page = `/${edge.node.slug}/`;
          createPage({
            path: page,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
              path: page
            },
          })
        });
      })
      .then(() => {
        graphql(
          `
            {
              allWordpressPost {
                edges {
                  node {
                    id
                    slug
                    status
                    template
                    format
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const postTemplate = path.resolve(`./src/templates/post.js`);

          result.data.allWordpressPost.edges.forEach(edge => {
            const post = `/posts/${edge.node.slug}`;
            createPage({
              path: post,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
                path: post
              },
            })
          });
          resolve()
        })
      })
    // ==== END POSTS ====
  })
}