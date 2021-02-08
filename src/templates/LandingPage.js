import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import _ from 'lodash'
import groupBy from 'lodash/fp/groupBy'
import flow from 'lodash/fp/flow'
import LandingPageTemplate  from './LandingPageTemplate.js'

const map = require('lodash/fp/map').convert({ cap: false })

// Export Template for use in CMS preview

const LandingPage = ({
  data: { page, allPages, allOverviewPages },
  currentDirectory,
  location,
}) => {
  if (typeof window !== `undefined`) {
    currentDirectory = location.pathname.split('/').filter(Boolean).pop()
  }
  // get all overview pages on current page
  const overviewPages = {
    items: allOverviewPages.hasOwnProperty('edges')
      ? allOverviewPages.edges.filter((items) =>
          items.node.fields.contentType.includes(currentDirectory)
        )
      : false,
  }
  

  const overViewGroups = flow(
    map((item) => {
      return {
        category: item.node.fields.contentType
          .split('/')
          .pop()
          .toLowerCase()
          .replace(/-/g, ' '),
        previewImage: item.node.frontmatter.previewImage,
      }
    })
  )(overviewPages.items)
  // get all article pages on current page that does not have a category
  const children = {
    items: allPages.hasOwnProperty('edges')
      ? allPages.edges.filter(
          (items) =>
            items.node.fields.contentType.includes(currentDirectory) &&
            items.node.frontmatter.hidden !== true
        )
      : false,
  }
  const groups = flow(
    groupBy('node.frontmatter.category'),
    map((value, key) => ({
      category: key.toLowerCase(),
      link: value,
      previewImage: overViewGroups.previewImage,
    }))
  )(children.items)

  const groupsSorted = _.orderBy(
    groups,
    [
      (item) => {
        const nestedObj = _.get(item, 'link')
        item['link'] = _.orderBy(
          nestedObj,
          ['node.frontmatter.priority', 'node.frontmatter.title'],
          ['asc', 'asc']
        )
        return [item.category, item['link']]
      },
    ],
    'asc',
    'asc'
  )

  var merged = _.merge(
    _.keyBy(overViewGroups, 'category'),
    _.keyBy(groupsSorted, 'category')
  )
  var concatCategories = _.values(merged)

  return (
    <Layout
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
      menu={true}
    >
      <LandingPageTemplate
        {...page}
        {...page.frontmatter}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        body={page.html}
        contentBottom={
          page.fields.frontmattermd?.contentBottom?.html ||
          page.frontmatter.contentBottom
        }
        blockquote={page.frontmatter.blockquote}
        categories={concatCategories}
      />
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query LandingPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro
        contentBottom
        blockquote {
          text
          author
        }
      }
      fields {
        frontmattermd {
          contentBottom {
            rawMarkdownBody
            html
          }
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
          }
          fields {
            slug
            contentType
          }
        }
      }
    }

    allOverviewPages: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "CategoryOverview" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            title
            lang
            previewImage {
              publicURL
            }
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
