import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import _ from 'lodash';
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';

// TODO only import whats needed from lodash

// Export Template for use in CMS preview
export const ComponentGroupTemplate = ({
  title,
  intro,

}) => (
   
  <>
  
  <Wrapper tag="div">
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
   </Wrapper>
    

   
  </>
)
const ComponentGroup = ({ data: { page, allPages }, location }) => {

  // Get all created components  
  const components = {
    categories: allPages.hasOwnProperty('edges')
      ? allPages.edges.map(category => {
          return {  ...category.node}
        })
      : false
      
  }
  
  // Sort and arrange them in categories 
  const componentNavigation = _(components.categories)
  .chain()
  .groupBy('frontmatter.category')
  .map((value, key) => ({ category: key , component: value}))
  .value()
  
  const menu = {
    items: componentNavigation,
    location: location
  }

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      componentNavigation={componentNavigation} 
      menu={menu}
    >
      <ComponentGroupTemplate 
        {...page} 
        {...page.frontmatter} 
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        componentNavigation={componentNavigation} 
      />
    </Layout>
  )
}

export default ComponentGroup

export const pageQuery = graphql`
  query ComponentGroup($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        slug
      }
    }
  
    allPages: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\//components/web/"} } 
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`