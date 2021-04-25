import ChangelogPageTemplate from './ChangelogPageTemplate.js'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import { navigate } from '@reach/router'
import React from 'react'

// Export Template for use in CMS preview


const ChangelogPage = ({ data: { page, log }, location }) => {
  const breadcrumb = {
    title: page.frontmatter.title,
    location: location,
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
        index={index}
        onTabsChange={onTabsChange}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        components={log.organization.repository.releases.edges}
      />
    </Layout>
  )
}

export default ChangelogPage

export const query = graphql`
  query ChangelogPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        intro
      }
    }
    log: github {
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
  }
`
