import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';

// Export Template for use in CMS preview
export const DesignPageTemplate = ({
  title,
  intro

}) => (
  
  <> 
    <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
    </Wrapper>
  </>
)
const DesignPage = ({ 
  data: { page },
  location,

  },) => {

  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location
  }
  
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      breadcrumb={breadcrumb}
      menu={true}
    >
      <DesignPageTemplate 
        {...page} 
        {...page.frontmatter}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        category={page.frontmatter.category}
      />
    </Layout>
  )
}

export default DesignPage


// Get data from GraphiQL

export const pageQuery = graphql`

  
  query DesignPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      
      frontmatter {
        title
        intro
        template
        category     
      }
    }
  }
`
