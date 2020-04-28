import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import TabsWrapper from '../components/Tabs';
import ComponentExample from '../components/ComponentExample'
import { Location, navigate, globalHistory} from "@reach/router";
import ComponentVersion from '../components/ComponentVersion';
import Deprecated from '../components/Deprecated';
// Export Template for use in CMS preview

export const ComponentPageTemplate = ({
  title,
  intro,
  componentExample,
  backgroundColor,
  tabs,
  currentDirectory

}) => (
  
  <> 
    { currentDirectory && <Deprecated status={currentDirectory} />}
    <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={"left"} /> 
      { currentDirectory && <ComponentVersion version={currentDirectory} />}
    </Wrapper>
    <Wrapper tag="div" menu={true} narrow>
      <Preamble text={intro} tag="p" align={"left"} />
    </Wrapper>
    <Wrapper tag="div" menu={true}>
      {componentExample && componentExample.length > 0 && <ComponentExample variants={componentExample} background={backgroundColor}   />}
    </Wrapper>
      
      <Location>
        {({ location }) => (
          <TabsWrapper tabs={tabs} location={location} navigate={navigate}>
            { currentDirectory && <Deprecated fixed={true} status={currentDirectory} />}
          </TabsWrapper>
        )}
      </Location>
  </>
)


const ComponentPage = ({ 
  data: { page, allComponentExample },
  location,
  currentDirectory
  
  },) => {
  console.log(location)
  // window is not avalible during gatsby build 
  if(typeof window !== `undefined`) {
    const path = globalHistory.location.pathname
    currentDirectory = path.split('/').filter(Boolean).pop();
   }
  console.log(currentDirectory)
  const toKebabCase = str =>
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-');
   const componentExample = {
    examples: allComponentExample.hasOwnProperty('edges')
      ? allComponentExample.edges.filter(exemple => (toKebabCase(exemple.node.relativeDirectory.split("/").pop()).toLowerCase()) === currentDirectory)
      : false
   }
  console.log(allComponentExample)
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
        lang
        previewImage {
          publicURL
        }
        backgroundColor
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
              headings{
                value
              }
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

