
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import AccessibilityPageTemplate from './AccessibilityPageTemplate.js'


const AccessibilityPage = ({ data: { page }, location }) => {
  
  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location,
  }
  
  
  
  
  return (
    <Layout
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
      breadcrumb={breadcrumb}
      menu={true}
    >
      <AccessibilityPageTemplate
        {...page}
        {...page.frontmatter}
        heroBlock={page.frontmatter.heroBlock}
        body={page.html}
        wrapperWidth={page.frontmatter.wide}
        checklist={page.frontmatter.checklist}
      />
    </Layout>
  )
}

export default AccessibilityPage


// Get data from GraphiQL

export const pageQuery = graphql`
  query AccessibilityPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro
        template
        category
        wide
        checklist {
          section
          checklistList {
            title
            text
            tags
          }
        }
        heroBlock {
          color
          quote
          cite
          image {
            publicURL
          }
        }
      }
      
    }
  }
`
