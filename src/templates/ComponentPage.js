import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import TabsWrapper from '../components/Tabs';
import ComponentExample from '../components/ComponentExample'
import { Location } from "@reach/router";
import { navigate } from '@reach/router'
import Badge from '../components/Badge';
// Export Template for use in CMS preview
export const ComponentPageTemplate = ({
  title,
  intro,
  componentExample,
  backgroundColor,
  tabs,
  status

}) => (
  
  <> 

  
    <Wrapper tag="div" menu={true} narrow={true}>
      <Heading tag={1} text={title} align={"left"}> { status && <Badge status={status} />}</Heading>
      <Preamble text={intro} tag="p" align={"left"} />
    </Wrapper>
    <Wrapper tag="div" menu={true}>
      {componentExample && componentExample.length > 0 && <ComponentExample variants={componentExample} background={backgroundColor}   />}
    </Wrapper>
    
    <Location>
      {({ location }) => (
        <TabsWrapper tabs={tabs} location={location} navigate={navigate} />
      )}
    </Location>

  </>
)


const ComponentPage = ({ 
  data: { page, allComponentExample },
  location,
  currentDirectory
  
  },) => {
  
  // window is not avalible during gatsby build 
  if(typeof window !== `undefined`) {
    currentDirectory = location.pathname.split('/').filter(Boolean).pop();
   }
  const toKebabCase = str =>
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-');
   const componentExample = {
    examples: allComponentExample.hasOwnProperty('edges')
      ? allComponentExample.edges.filter(exemple => (toKebabCase(exemple.node.relativeDirectory.split("/").pop()).toLowerCase()) === currentDirectory.split('/').pop())
      : false
   }
  console.log(allComponentExample , currentDirectory)
  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location
  }
  
  
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
        tabs={page.fields.frontmattermd.tabs}
        category={page.frontmatter.category}
        componentExample={componentExample.examples}
        backgroundColor={page.frontmatter.backgroundColor}
        currentDirectory={currentDirectory}
        status={page.frontmatter.status}
        priority={page.frontmatter.priority}
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
        background
        status
        tabs{
          name
          content
        }
        
      }
      fields {

          frontmattermd {
            tabs {
              content {
                html
              }
              name {
                rawMarkdownBody
              }
            }
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

