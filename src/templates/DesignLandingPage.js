import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import Content from '../components/Content';

// Export Template for use in CMS preview
export const DesignLandingPageTemplate = ({
  title,
  intro,
  body

}) => (
  
  <> 
    <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      <Content className="content" source={body} />
    </Wrapper>
  </>
)
const DesignLandingPage = ({ 
  data: { page }

  },) => {

  
  
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      menu={true}
    >
      <DesignLandingPageTemplate 
        {...page} 
        {...page.frontmatter}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        category={page.frontmatter.category}
        body={page.html}
      />
    </Layout>
  )
}

export default DesignLandingPage


// Get data from GraphiQL

export const pageQuery = graphql`

  
  query DesignLandingPage($id: String!) {
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
