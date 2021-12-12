import 'react-simple-flex-grid/lib/main.css'

import HomePageTemplate from './HomePageTemplate.js'
import Layout from '../components/Layout.js'
import React from 'react'
import { graphql } from 'gatsby'

const HomePage = ({ data: { page } }) => {

  const sources = [
    page.frontmatter.fullWidthImage.fullWidthImageDesktop.childImageSharp.desktopImage,
    page.frontmatter.fullWidthImage.fullWidthImageMobile.childImageSharp.mobileImage,
  ]
  console.log(sources[0], 'sås')
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
        imageSource={sources}
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
              desktopImage: gatsbyImageData(
                layout: FULL_WIDTH
                quality: 70
              )
            }
          }
          fullWidthImageMobile {
            childImageSharp {
              mobileImage: gatsbyImageData(
                quality: 70
                aspectRatio: 1.333
              )
            }
          }
        }
      }
    }
  }
`
