import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Menu from '../components/Menu';
import { Grid, Cell } from "styled-css-grid"; 
import Wrapper from '../components/Wrapper'
import _ from 'lodash';
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import TabsWrapper from '../components/Tabs';
import Preview from '../components/Preview';


// TODO only import whats needed from lodash

// Export Template for use in CMS preview
export const ComponentPageTemplate = ({
  title,
  intro,
  body,
  componentList,
  location,
  tabs,
  category

}) => (
  
  <>
    <Menu categories={componentList} location={location}  />
    <Wrapper tag="div">
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      <Preview />
    </Wrapper>
    {category != null && <TabsWrapper tabs={tabs} /> }
    <section className="section">
      <div className="container">
        
        <Content source={body} />
      </div>
    </section>
   
  </>
)
const ComponentPage = ({ data: { page, allPages } }) => {
  
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

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
    >
      <ComponentPageTemplate {...page} {...page.frontmatter} body={page.html} tabs={page.frontmatter.tabs} componentList={componetsList} />
    </Layout>
  )
}

export default ComponentPage

export const pageQuery = graphql`
  query ComponentPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        intro
        template
        category
        tabs{
          name
          content
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
          }
          fields {
            slug
          }
        }
        
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
