import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import IconsPageTemplate  from './IconsTemplate.js'



const IconsPage = ({ data: { page }, location }) => {
  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location,
  }
  return (
    <Layout
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
      specialIconsContent={page.frontmatter.specialIconsContent}
      menu={true}
      breadcrumb={breadcrumb}
    >
      <IconsPageTemplate
        {...page}
        {...page.frontmatter}
        bodyHtml={page.htmlAst}
        body={page.html}
      />
    </Layout>
  )
}

export default IconsPage

export const pageQuery = graphql`
  ## Query for IconsPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query IconsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      htmlAst
      frontmatter {
        title
        intro
        specialIconsContent
      }
    }
  }
`
