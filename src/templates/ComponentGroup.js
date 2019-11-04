import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Menu from '../components/Menu';
import { Grid, Cell } from "styled-css-grid"; 
import Wrapper from '../components/Wrapper'
import _ from 'lodash';

// TODO only import whats needed from lodash

// Export Template for use in CMS preview
export const ComponentGroupTemplate = ({

  body,
  componentList,
  location

}) => (
   
  <>
  
  <Wrapper tag="div" >
    <Grid>
       <Cell width={2}> <Menu categories={componentList} location={location}  /></Cell>
       <Cell width={8}> <Content source={body} />
        Group page
       </Cell>
    </Grid>
  </Wrapper>
    

   
  </>
)
const ComponentGroup = ({ data: { page, allPages } }) => {

  // Get all created components  
  const components = {
    categories: allPages.hasOwnProperty('edges')
      ? allPages.edges.map(category => {
          return {  ...category.node}
        })
      : false
      
  }
  
  // Sort and arrange them in categories 
  const componetsList = _(components.categories)
  .chain()
  .groupBy('frontmatter.category')
  .map((value, key) => ({ category: key , component: value}))
  .value()
  console.log('componetsList', componetsList)

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
    >
      <ComponentGroupTemplate {...page} {...page.frontmatter} body={page.html} componentList={componetsList} />
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