import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import _ from 'lodash';
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import TabsWrapper from '../components/Tabs';
import ComponentExample from '../components/ComponentExample'
// TODO only import whats needed from lodash

// Export Template for use in CMS preview
export const ComponentPageTemplate = ({
  title,
  intro,
  componentExample,
  location,
  tabs,
  category

}) => (
  
  <>

    
    <Wrapper tag="div">
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      <ComponentExample componentExample={componentExample} component={location} />
    </Wrapper>
    {category != null && <TabsWrapper tabs={tabs} /> }
   

  </>
)


const ComponentPage = ({ 
  data: { page, allPages, allComponentExample },
  location,
  
  }) => {
  
  //console.log(currentDirectory, 'location', allComponentExample.edges, 'file')
  let currentDirectory = location.href.replace(/\/$/, '').split('/').pop();
  const componentExample = {
    examples: allComponentExample.hasOwnProperty('edges')
      ? allComponentExample.edges.filter(exemple => exemple.node.relativeDirectory === currentDirectory)
      : false
  }

   // get All examples

  //  const ltest = _(componentExample.examples)
  //  console.log(componentExample.examples, 'he');
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

  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location
  }

  const menu = {
    items: componentNavigation,
    location: location
  }
 

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      breadcrumb={breadcrumb}
      menu={menu}
    >
      <ComponentPageTemplate 
        {...page} 
        {...page.frontmatter}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        tabs={page.frontmatter.tabs}
        category={page.frontmatter.category}
        componentNavigation={componentNavigation} 
        componentExample={ComponentExample} 
      />
    </Layout>
  )
}

export default ComponentPage


// Get data from GraphiQL

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
    allComponentExample: allFile(filter: {sourceInstanceName: {eq: "componentExample"}}) {
        edges {
          node {
            relativeDirectory
            sourceInstanceName
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
