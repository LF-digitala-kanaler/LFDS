import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import _ from 'lodash';
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import CardList from '../components/CardList';
import Blockquote from '../components/Blockquote';
import Content from '../components/Content/';
// TODO only import whats needed from lodash

// Export Template for use in CMS preview
export const ComponentGroupTemplate = ({
  title,
  intro,
  blockquote,
  contentAbove,
  contentBelow,
  componentsLinks
  
}) => (
   
  <>
  <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      <Content source={contentAbove} />   
      { componentsLinks && <CardList list={componentsLinks} /> }
      <Content source={contentBelow} />
      {blockquote && <Blockquote text={blockquote.text} author={blockquote.author} />}
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
      backgroundClass={page.frontmatter.background}
    >
      <ComponentGroupTemplate 
        {...page} 
        {...page.frontmatter} 
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        blockquote={page.frontmatter.blockquote}
        componentNavigation={componentNavigation} 
        componentsLinks={componentsLinks}
        contentAbove={page.frontmatter.contentAbove}
        contentBelow={page.frontmatter.contentBelow}
      />
    </Layout>
  )
}

export default ComponentGroup

export const pageQuery = graphql`
  query ComponentGroup($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      frontmatter {
        title
        intro
        slug
        contentBelow
        contentAbove
        background
        blockquote {
          text
          author
        }
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
            previewImage
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`