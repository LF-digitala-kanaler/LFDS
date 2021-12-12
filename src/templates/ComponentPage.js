import ComponentPageTemplate from './ComponentPageTemplate.js'
import Layout from '../components/Layout.js'
import React from 'react'
import { globalHistory } from '@reach/router'
import { graphql } from 'gatsby'

const ComponentPage = ({
  data: { page, allComponentExample },
  location,
  currentDirectory,
}) => {
  // window is not avalible during gatsby build
  if (typeof window !== `undefined`) {
    const path = globalHistory.location.pathname
    currentDirectory = path.split('/').filter(Boolean).pop()
  }
  const toKebabCase = (str) =>
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')

  const componentExample = {
    examples: Object.prototype.hasOwnProperty.call(allComponentExample, 'edges')
      ? allComponentExample.edges.filter(
        (exemple) =>
          toKebabCase(
            exemple.node.relativeDirectory.split('/').pop()
          ).toLowerCase() === currentDirectory
      )
      : false,
  }

  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location,
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
        componentsExample={componentExample.examples}
        componentsNavigation={page.frontmatter.componentsNavigation}
        backgroundColor={page.frontmatter.backgroundColor}
        currentDirectory={currentDirectory}
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
    allComponentExample: allHtmlContent {
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
