import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import _ from 'lodash';
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import CardList from '../components/CardList';
import Content from '../components/Content/';
// TODO only import whats needed from lodash

// Export Template for use in CMS preview
export const LandingPageTemplate = ({
  title,
  intro,
  content,
  componentsLinks
  
}) => (
   
  <>
  <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      { componentsLinks && <CardList list={componentsLinks} /> } 
      <Content source={content} />  
      </Wrapper>
  </>
)
const LandingPage = ({ data: { page, allPages }, location }) => {
  // Get all created components  
  const components = {
    categories: allPages.hasOwnProperty('edges')
      ? allPages.edges.map(category => {
          return {  ...category.node}
        })
      : false
      
  }
  // Get compontents from this group
  const componentsInGroup = {
    links: allPages.hasOwnProperty('edges')
      ? allPages.edges.filter(category => {
        if(category.node.frontmatter.category === page.frontmatter.title) {
          return {  ...category.node}
        }
      })
      : false   
  }
  const componentsLinks = componentsInGroup.links;
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
      <LandingPageTemplate 
        {...page} 
        {...page.frontmatter} 
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        componentNavigation={componentNavigation} 
        componentsLinks={componentsLinks}
        content={page.frontmatter.content}
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
        content
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