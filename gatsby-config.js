
module.exports = {
  siteMetadata: {
    title: 'LFUI',
    headline: 'Länsförsäkringar User Interface',
    description: 'Länsförsäkringar User Interface`',
    siteUrl: 'https://lfui-blackwell-9ff8ba.netlify.com/'
  },
  plugins: [

    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
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
        name: 'LFUI',
        short_name: 'LFUI',
        start_url: '/',
        background_color: '#00C2BD',
        theme_color: '#00C2BD',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: `${__dirname}/static/images/favicon.svg` // This path is relative to the root of the site.
      }
    },
   
    // Add static assets before markdown files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },
     
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/node_modules/lfui/html`,
        name: 'componentExample',
        
      }
    },
    // images
    
    {
      resolve: 'gatsby-transformer-remark',
      
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-transformer-remark-frontmatter',
            // default: { blacklist: [] }
            options: {
              // frontmatter fields to exclude, including all others
              blacklist: ['template','previewImage','description','category','excerpt','backgroundColor', 'intro']
              // frontmatter fields to include, excluding all others
              //whitelist: ['tabs']
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `140`,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
    
    'gatsby-plugin-sitemap',
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
    
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
