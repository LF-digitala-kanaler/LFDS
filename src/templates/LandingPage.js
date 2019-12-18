import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Blockquote from '../components/Blockquote';
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import CardGrid from '../components/CardGrid';
// TODO only import whats needed from lodash

// Export Template for use in CMS preview
export const LandingPageTemplate = ({
  title,
  intro,
  blockquote,
  componentCategories
  
}) => (
   
  <>
    <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      <CardGrid list={componentCategories}  /> 
      { blockquote && <Blockquote text={blockquote.text} author={blockquote.author} /> }
    </Wrapper>
  </>
)
const LandingPage = ({ data: { page, allPages } }) => {

  
  // Get all component categoriies  

  const componentCategories = {
    categories: allPages.hasOwnProperty('edges')
      ? allPages.edges.map(category => {
          return {  ...category.node}
        })
      : false
  }
  
  
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      backgroundClass={page.frontmatter.background}
      menu={true}
    >
      <LandingPageTemplate 
        {...page} 
        {...page.frontmatter} 
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        blockquote={page.frontmatter.blockquote}
        componentCategories={componentCategories.categories}
      />
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query LandingPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      frontmatter {
        title
        intro
        background
        blockquote {
          text
          author
        }
      }
    }
    
    allPages: allMarkdownRemark(
      filter: {frontmatter: {
        template: {
          eq: "ComponentGroup"
        }
        
      }}
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            title
            previewImage
          }
          fields {
            slug
          }
        }
      }
    }
  }
`