
module.exports = {
  siteMetadata: {
    title: 'LFDS',
    headline: 'Länsförsäkringar Design System',
    siteUrl: 'https://lf-digitala-kanaler.github.io/'
  },
  plugins: [

    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          navigateFallbackBlacklist: [/^\/admin.*$/],
        },
        runtimeCaching: [
          {
            // Use cacheFirst since these don't need to be revalidated (same RegExp
            // and same reason as above)
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `cacheFirst`
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`
          },
          
        ],
        skipWaiting: true,
        clientsClaim: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'LFDS',
        short_name: 'LFDS',
        start_url: '/',
        background_color: '#00C2BD',
        theme_color: '#00C2BD',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: `${__dirname}/static/img/favicon.svg` // This path is relative to the root of the site.
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
        name: 'images',
      },
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
        path: `./src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/node_modules/lfui-components/dist/docs/html`,
        name: 'componentExample',
        
      }
    },
   
    // images
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
              encode: "advanced",
              tokenize: "reverse",
              suggest: true,
              cache: true,
              limit: 5
            },
            store: true, // In case you want to make the field available in the search results.
          },
          {
            name: 'description',
            indexed: false,
            resolver: 'frontmatter.description',
            attributes: {
              encode: 'balance',
              tokenize: 'strict',
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          // {
          //   name: 'heading',
          //   indexed: false,
          //   resolver: 'fields.frontmattermd.tabs', // not a frontmatter field
          //   store: true,
          // },
          // {
          //   name: 'heading',
          //   indexed: false,
          //   resolver: 'headings.value', // all headings outside of tabs not working. Try to create a node in fields with these values
          //   store: true,
          // },
          {
            name: 'url',
            indexed: false,
            resolver: 'fields.slug',
            store: true,
          },
        ],
        
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      
      options: {
        plugins: [
          
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: "gatsby-remark-component",
            options: { components: ["Collapse"] }
          },
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: "gatsby-remark-relative-links",
            options: {
              domainRegex: /http[s]*:\/\/[www.]*localhost:8000\.com[/]?/,
            }
          },
          {
          resolve: `gatsby-remark-absolute-link-catch`,
            options: {
              absoluteUrls: [
                //Here I am using pretty much every protocol combination you could expect for a www... site
                "https://lf-digitala-kanaler.github.io",
                "https://www.lf-digitala-kanaler.github.io",
                "http://lf-digitala-kanaler.github.io",
                "http://www.lf-digitala-kanaler.github.io"
              ],
              developmentLocation: `http://localhost:8000` //optional, defaults to http://localhost:8000
            }
          },
          {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_target",
            rel: "external nofollow noreferrer noopener"
            }
          },
          
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2200,
            },
          },
          {
            resolve: 'gatsby-transformer-remark-frontmatter',
            // default: { blacklist: [] }
            options: {
              // frontmatter fields to exclude, including all others
              blacklist: ['template','previewImage','description','category','excerpt','backgroundColor', 'intro', 'tabs.content', 'verticalResize']
              // frontmatter fields to include, excluding all others
              //whitelist: ['tabs']
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `140`,
              icon:`<svg width="14" height="19"><path d="M2.965 18.293l1.02-4.992h3.68l-1.009 4.992h1.758l1.02-4.992h3.609v-1.746H9.785l.88-4.254h2.378V5.555h-2.027l1.02-5.028h-1.77l-1.02 5.028H5.555L6.575.527H4.815l-1.02 5.028H.247V7.3h3.2l-.868 4.254H.246V13.3h1.98l-1.019 4.992h1.758zm5.05-6.738h-3.68L5.204 7.3h3.692l-.88 4.254z" fill="#E5E5E5" fill-rule="nonzero"/></svg>`,
              className:'Heading--anchor',
              isIconAfterHeader: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          'gatsby-remark-transform-links-to-external' // Local plugin see ./plugin for source code 
        ]
      }
    },
    
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            
            browsers: '> 0.5%, last 2 versions, ie 11',
            features: {
              'nesting-rules': true,
              'postcss-custom-media': true
            },
            stage: 1 }),
          
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        stylesPath: `${__dirname}/src/cms/admin.css`,
        enableIdentityWidget: true
      }
    },
    
    {
      resolve: "gatsby-source-graphql",
      options: {
          typeName: "GitHub",
          fieldName: "github",
          url: "https://api.github.com/graphql",
          // HTTP headers
          headers: {
            // Learn about environment variables: https://gatsby.dev/env-vars
            Authorization: `Bearer 970a34d72e11df57dbc7b55b3f6f170cd22c765d`
          },
        
        },
    },
    // GA
    {
    resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-16369289-32",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/admin/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
