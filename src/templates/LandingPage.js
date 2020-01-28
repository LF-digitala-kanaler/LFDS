import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Blockquote from '../components/Blockquote';
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import CardGrid from '../components/CardGrid';
import Changelog from '../components/Changelog';
import _ from 'lodash';


// Export Template for use in CMS preview
export const LandingPageTemplate = ({
  title,
  intro,
  blockquote,
  componentCategories = [],

  
}) => (
   
  <>
  
    <Wrapper tag="div" menu={true} narrow={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      { componentCategories && <CardGrid list={componentCategories}  /> }
      {/* <Changelog />  */}
      { blockquote && <Blockquote text={blockquote.text} author={blockquote.author} /> }
    </Wrapper>
  </>
)
const LandingPage = ({ data: { page, allGroups },currentDirectory, location }) => {
  
  
  if(typeof window !== `undefined`) {
    currentDirectory = location.href.split('/').filter(Boolean).pop();
   }
  // get all children pages 
  const children = {
    items: allGroups.hasOwnProperty('edges')
      ? allGroups.edges.filter(items => (items.node.fields.contentType.includes(currentDirectory)))
      : false
  }

  const groups = _(children.items)
  .chain()
  .uniqBy('node.frontmatter.category')
  .orderBy('node.frontmatter.category',['asc'])
  .value()
  
  
  
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
        componentCategories={groups}

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
    
    allGroups: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "/^((?!index).)*$/"} },
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
            contentType
          }
        }
      }
    }
  }
`