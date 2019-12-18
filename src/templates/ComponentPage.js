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
  backgroundColor,
  
  tabs

}) => (
  
  <>

    
    <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      {componentExample && componentExample.length > 0 && <ComponentExample variants={componentExample} background={backgroundColor}  />}
    </Wrapper>
    {tabs != null && <TabsWrapper tabs={tabs} /> }
   

  </>
)


const ComponentPage = ({ 
  data: { page, allComponentExample },
  location,
  currentDirectory
  
  },) => {
  // window is not avalible during gatsby build 
  if(typeof window !== `undefined`) {
    currentDirectory = location.href.split('/').filter(Boolean).pop();
   }
   
   const componentExample = {
      examples: allComponentExample.hasOwnProperty('edges')
        ? allComponentExample.edges.filter(exemple => (exemple.node.relativeDirectory.split("/").pop()).toLowerCase() === currentDirectory)
        : false
    }
  
  

  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location
  }

  // const menu = {
  //   items: componentNavigation,
  //   location: location
  // }
 

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      breadcrumb={breadcrumb}
      menu={true}
    >
      <ComponentPageTemplate 
        {...page} 
        {...page.frontmatter}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        tabs={page.frontmatter.tabs}
        category={page.frontmatter.category}
        
        componentExample={componentExample.examples}
        backgroundColor={page.frontmatter.backgroundColor}
        currentDirectory={currentDirectory}
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
        previewImage
        description
        backgroundColor
        
        tabs{
          name
          content
        }
      }
    }
    allComponentExample: allHtmlContent{
        edges {
          node {
            slug
            id
            name
            content
            relativeDirectory
          }
        }
      }
    
  }
`
