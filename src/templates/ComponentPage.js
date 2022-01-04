import ComponentPageTemplate from './ComponentPageTemplate.js'
import Layout from '../components/Layout.js'
import React from 'react'
import { globalHistory } from '@reach/router'
import { graphql } from 'gatsby'

const ComponentPage = ({
  data: { page, allComponents },
  location,
  currentPage
}) => {
  // window is not avalible during gatsby build
  if (typeof window !== `undefined`) {
    const path = globalHistory.location.pathname
    currentPage = path.split('/').filter(Boolean).pop()
  }
  const toKebabCase = (str) =>
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')

  // Find components for current page.
  const componentsForCurrentPage = {
    components: Object.prototype.hasOwnProperty.call(allComponents, 'edges')
      ? allComponents.edges.filter(
          (item) =>
            toKebabCase(
              item.node.relativeDirectory.split('/').pop()
            ).toLowerCase() === currentPage
        )
      : false
  }

  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location
  }

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
      breadcrumb={breadcrumb}
      menu={true}
      backgroundClass={'bg-smoke'}
    >
      <ComponentPageTemplate
        {...page}
        {...page.frontmatter}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        tabs={page.frontmatter.tabs}
        category={page.frontmatter.category}
        componentForCurrentPage={componentsForCurrentPage.components}
        componentsNavigation={page.frontmatter.componentsNavigation}
        backgroundColor={page.frontmatter.backgroundColor}
        currentPage={currentPage}
        priority={page.frontmatter.priority}
        verticalResize={page.frontmatter.verticalResize}
      />
    </Layout>
  )
}

export default ComponentPage

// Get data from GraphiQL

export const pageQuery = graphql`
  query ComponentPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html

      frontmatter {
        title
        intro
        template
        category
        lang
        verticalResize
        componentsNavigation {
          name
        }
        previewImage {
          publicURL
        }
        backgroundColor
        tabs {
          name
          content {
            html
          }
        }
      }
    }
    allComponents: allHtmlContent {
      edges {
        node {
          slug
          id
          name
          content
          relativeDirectory
        }
      }
    }
  }
`
