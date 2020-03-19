import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import Content from '../components/Content';

// Export Template for use in CMS preview
export const ArticlePageTemplate = ({
  title,
  intro,
  body
}) => (
  
  <> 
    <Wrapper tag="div" menu={true} narrow>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      <Content source={body} />   
    </Wrapper>
  </>
)
const ArticlePage = ({ 
  data: { page }

  },) => {
   

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      menu={true}
      backgroundClass={page.frontmatter.background}
    >
      <ArticlePageTemplate 
        {...page} 
        {...page.frontmatter}
        body={page.html}
      />
    </Layout>
  )
}

export default ArticlePage


// Get data from GraphiQL

export const pageQuery = graphql`

  
  query ArticlePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      
      frontmatter {
        title
        intro
        template
        category
        background
      }
    }
  }
`
