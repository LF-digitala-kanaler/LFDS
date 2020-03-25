const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const cssLoaderRe = /\/css-loader\//
const targetFile = `.module.css`

const processRule = rule => {
  if (rule.oneOf) {
    return {
      ...rule,
      oneOf: rule.oneOf.map(processRule),
    }
  }
  // if (!rule.test.test(targetFile)) {
  //   return rule
  // }
  if (Array.isArray(rule.use)) {
    return {
      ...rule,
      use: rule.use.map(use => {
        if (!cssLoaderRe.test(use.loader)) {
          return use
        }
        // adjust css-loader options
        return {
          ...use,
          options: {
            ...use.options,
            camelCase: false,
          },
        }
      }),
    }
  }
  return rule
}
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig()
  const newConfig = {
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.map(processRule),
    },
  }
  actions.replaceWebpackConfig(newConfig)

  
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  
  return graphql(`
    {
      docs: allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              template
              title
            }
            fields {
              slug
              contentType
            }
            headings {
              value
            }
          }
        }
      }
      examples: allHtmlContent {
        edges {
          node {
            name
            content
            slug
            
          }
        }
      }
    }

  `).then(result => {
    
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
      // create pages from md files
      const mdFiles = result.data.docs.edges
      const contentTypes = _.groupBy(mdFiles, 'node.fields.contentType')

      _.each(contentTypes, (pages, contentType) => {
        const pagesToCreate = pages.filter(page =>
        // get pages with template field
          _.get(page, `node.frontmatter.template`)
        )
        if (!pagesToCreate.length) return console.log(`Skipping ${contentType}`)

        pagesToCreate.forEach((page) => {
          const id = page.node.id
          createPage({
            // page slug set in md frontmatter
            path: page.node.fields.slug,
            component: path.resolve(
              `src/templates/${String(page.node.frontmatter.template)}.js`
            ),
            // additional data can be passed via context
            context: {
              id
            }
          })
        })
      });
      // create example code pages
      result.data.examples.edges.forEach(({ node }) => {
        createPage({
          path: `example/${node.name}`,
          component: path.resolve(__dirname, 'src/templates/Iframe.js'),
          context: {
            name: node.name,
          }
        })
      })

  })
}

exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent, createContentDigest, createNodeId }) => {
  const { createNodeField, createNode } = actions
  
  // convert frontmatter images
  fmImagesToRelative(node)

  // create pages for our examples from LFUI-components

  
  // Create smart slugs
  // https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/gatsby-node.js

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    
    let slug = createFilePath({ node, getNode, basePath: `content` })
    
    if (
      // home page gets root slug
      parsedFilePath.name === 'home' &&
      parsedFilePath.dir === 'pages'
    ) {
      slug = `/`
    } 
    
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
    // Add contentType to node.fields
    createNodeField({
      node,
      name: 'contentType',
      value: parsedFilePath.dir
    })
    createNodeField({
      node,
      name: `parent`,
      value: (parsedFilePath.dir.split("/").pop()).replace(/([A-Z])/g, ' $1')
    })
  }
  // setup html file nodes
  if (node.internal.type === `File` && node.internal.mediaType === `text/html`) {
    const nodeContent = await loadNodeContent(node);

    const htmlNodeContent = {
      content: nodeContent,
      name: node.name,
      slug: `example/${node.name}`,
      relativeDirectory: node.dir
    }
    const htmlNodeMeta = {
      id: createNodeId(`html-${node.id}`),
      parent: node.id,
      internal: {
        type: 'HTMLContent',
        mediaType: 'text/html',
        content: JSON.stringify(htmlNodeContent),
        contentDigest: createContentDigest(htmlNodeContent),
      },
    }
    const htmlNode = Object.assign({}, htmlNodeContent, htmlNodeMeta);
    createNode(htmlNode);
    
  }
}
