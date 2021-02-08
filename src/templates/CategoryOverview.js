import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import CategoryOverviewTemplate from './CategoryOverviewTemplate.js'

const CategoryOverviewPage = ({
  data: { page, allPages },
  location,
  currentDirectory,
}) => {
  if (typeof window !== `undefined`) {
    currentDirectory = location.href.split('/').filter(Boolean).pop()
  }

  const children = {
    links: allPages.hasOwnProperty('edges')
      ? allPages.edges.filter((category) => {
          if (
            category.node.fields.contentType.includes(currentDirectory) &&
            category.node.frontmatter.hidden !== true
          ) {
            return { ...category.node }
          } else {
            return null
          }
        })
      : false,
  }

  // Sort and arrange them in categories

  const breadcrumb = {
    title: page.frontmatter.title,
    location: location,
  }

  return (
    <Layout
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
      menu={true}
      breadcrumb={breadcrumb}
    >
      <CategoryOverviewTemplate
        {...page}
        {...page.frontmatter}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        blockquote={page.frontmatter.blockquote}
        categoryPages={children.links}
        contentAbove={page.frontmatter.contentAbove}
        body={page.html}
        bodyHtml={page.htmlAst}
      />
    </Layout>
  )
}
export default CategoryOverviewPage

export const query = graphql`
  query CategoryOverviewPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      htmlAst
      html
      frontmatter {
        title
        intro
        previewImage {
          publicURL
        }
        contentBelow
        contentAbove
        blockquote {
          text
          author
        }
      }
    }

    allPages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/^((?!index).)*$/" } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            title
            lang
            hidden
            previewImage {
              publicURL
            }
            description
          }
          fields {
            slug
            contentType
          }
        }
      }
    }
  }
`
