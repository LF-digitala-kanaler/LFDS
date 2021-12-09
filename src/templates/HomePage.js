import 'react-simple-flex-grid/lib/main.css'

import HomePageTemplate from './HomePageTemplate.js'
import Layout from '../components/Layout.js'
import React from 'react'
import { graphql } from 'gatsby'

const HomePage = ({ data: { page } }) => {
  const sources = [
    page.frontmatter.fullWidthImage.fullWidthImageDesktop.childImageSharp.fluid,
    {
      ...page.frontmatter.fullWidthImage.fullWidthImageMobile.childImageSharp
        .fluid,
      media: `(max-width: 820px)`,
    },
  ]

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
    >
      <HomePageTemplate
        {...page}
        {...page.frontmatter}
        shortcuts={page.frontmatter.shortcuts}
        shortcutsImage={page.frontmatter.shortcutsImage}
        shortcutsBottom={page.frontmatter.shortcutsBottom}
        fullWidthImage={page.frontmatter.fullWidthImage}
        relatedLinks={page.frontmatter.relatedLinks}
        body={page.html}
        images={sources}
      />
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        intro
        shortcuts {
          icon {
            publicURL
          }
          title
          text
          link
        }
        shortcutsImage {
          icon {
            publicURL
          }
          title
          text
          link
        }
        shortcutsBottom {
          icon {
            publicURL
          }
          title
          text
          link
        }
        relatedLinks {
          text
          url
        }
        fullWidthImage {
          title
          fullWidthImageDesktop {
            childImageSharp {
              fluid(maxWidth: 1500, quality: 84, maxHeight: 493) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          fullWidthImageMobile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 84) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
