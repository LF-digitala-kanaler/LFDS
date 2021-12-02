import ChangelogPageTemplate from './ChangelogPageTemplate.js'
import Layout from '../components/Layout.js'
import React from 'react'
import { graphql } from 'gatsby'
import { navigate } from '@reach/router'

// Export Template for use in CMS preview


const ChangelogPage = ({ data: { page, lfui, lfuiComponents }, location }) => {
  const breadcrumb = {
    title: page.frontmatter.title,
    location: location,
  }

  const versions = {
    lfui: lfui.organization.repository.releases.edges,
    lfuiComponents: lfuiComponents.organization.repository.releases.edges
  }

  const tabs = ['Components']
  const index = tabs.indexOf(location.search.substr(1))
  const onTabsChange = (index) =>
    navigate(`?${tabs[index]}`, { replace: false })
  return (
    <Layout
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
      breadcrumb={breadcrumb}
      menu={true}
      backgroundClass={'bg-smoke'}
    >
      <ChangelogPageTemplate
        {...page}
        {...page.frontmatter}
        body={page.html}
        index={index}
        onTabsChange={onTabsChange}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        versions={versions}
      />
    </Layout>
  )
}

export default ChangelogPage

export const query = graphql`
  query ChangelogPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro
      }
    }
    lfui: github {
      organization(login: "LF-digitala-kanaler") {
        repository(name: "LFUI") {
          releases(last: 60, orderBy: { field: CREATED_AT, direction: DESC }) {
            edges {
              node {
                tagName
                descriptionHTML
              }
            }
          }
        }
      }
    }
    lfuiComponents: github {
      organization(login: "LF-digitala-kanaler") {
        repository(name: "LFUI-components") {
          releases(last: 60, orderBy: { field: CREATED_AT, direction: DESC }) {
            edges {
              node {
                tagName
                descriptionHTML
              }
            }
          }
        }
      }
    }
  }
`
