require('dotenv')

module.exports = {
  siteMetadata: {
    title: 'LFDS',
    headline: 'Länsförsäkringar Design System',
    siteUrl: 'https://lf-digitala-kanaler.github.io/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    // `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          // navigateFallbackBlacklist: [/^\/admin.*$/],
          runtimeCaching: [
            {
              // Use cacheFirst since these don't need to be revalidated (same RegExp
              // and same reason as above)
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`
            },
            {
              // Add runtime caching of various other page resources
              urlPattern:
                /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`
            }
          ],
          skipWaiting: true,
          clientsClaim: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Länsförsäkringar Design System',
        short_name: 'LFDS',
        theme_color: '#005aa0',
        background_color: '#f3f3f3',
        display: 'standalone',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    // Add static assets before markdown files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/lf-icons/svg`,
        name: 'icons'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/node_modules/@lf-digitala-kanaler/lfui-components/dist/docs/html`,
        name: 'componentExample'
      }
    },

    {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        // L
        languages: ['en'],
        type: 'MarkdownRemark', // Filter the node types you want to index
        // Fields to index.
        fields: [
          {
            name: 'title',
            indexed: true, // If indexed === true, the field will be indexed.
            resolver: 'frontmatter.title',
            // Attributes for indexing logic. Check https://github.com/nextapps-de/flexsearch#presets for details.
            attributes: {
              encode: 'advanced',
              tokenize: 'reverse',
              suggest: true,
              cache: true,
              limit: 5
            },
            store: true // In case you want to make the field available in the search results.
          },
          {
            name: 'description',
            indexed: false,
            resolver: 'frontmatter.description',
            attributes: {
              encode: 'balance',
              tokenize: 'strict',
              threshold: 6,
              depth: 3
            },
            store: true
          },
          {
            name: 'url',
            indexed: false,
            resolver: 'fields.slug',
            store: true
          }
        ]
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        pedantic: false,
        plugins: [
          {
            resolve: 'gatsby-transformer-remark-frontmatter'
          },
          {
            resolve: 'gatsby-remark-component',
            options: { components: ['Collapse'] }
          },
          {
            resolve: 'gatsby-remark-relative-images'
          },
          {
            resolve: 'gatsby-remark-relative-links',
            options: {
              domainRegex: /http[s]*:\/\/[www.]*localhost:8000\.com[/]?/
            }
          },
          {
            resolve: `gatsby-remark-absolute-link-catch`,
            options: {
              absoluteUrls: [
                //Here I am using pretty much every protocol combination you could expect for a www... site
                'https://lf-digitala-kanaler.github.io',
                'https://www.lf-digitala-kanaler.github.io',
                'http://lf-digitala-kanaler.github.io',
                'http://www.lf-digitala-kanaler.github.io'
              ],
              developmentLocation: `http://localhost:8000` //optional, defaults to http://localhost:8000
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'external nofollow noreferrer noopener'
            }
          },

          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2200
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg width="14" height="19"><path d="M2.965 18.293l1.02-4.992h3.68l-1.009 4.992h1.758l1.02-4.992h3.609v-1.746H9.785l.88-4.254h2.378V5.555h-2.027l1.02-5.028h-1.77l-1.02 5.028H5.555L6.575.527H4.815l-1.02 5.028H.247V7.3h3.2l-.868 4.254H.246V13.3h1.98l-1.019 4.992h1.758zm5.05-6.738h-3.68L5.204 7.3h3.692l-.88 4.254z" fill="#E5E5E5" fill-rule="nonzero"/></svg>`,
              className: 'Heading--anchor',
              isIconAfterHeader: true,
              removeAccents: true
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
            exportLocalsConvention: 'asIs'
          }
        },
        postCssPlugins: [
          require(`postcss-preset-env`)({
            browsers: '> 0.5%, last 2 versions',
            features: {
              'nesting-rules': true,
              'postcss-custom-media': true
            },
            stage: 1
          })
        ]
      }
    },

    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        stylesPath: `${__dirname}/src/cms/admin.css`,
        enableIdentityWidget: false
      }
    },

    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
