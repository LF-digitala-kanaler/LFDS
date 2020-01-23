import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import CardList from '../components/CardList';
import Blockquote from '../components/Blockquote';
import Content from '../components/Content';


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
  <Wrapper tag="div" menu={true} narrow={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      <Content className="content" source={contentAbove} />   
      { componentsLinks && <CardList list={componentsLinks} /> }
      <Content className="content" source={contentBelow} />
     
      { blockquote && <Blockquote text={blockquote.text} author={blockquote.author} /> }
  </Wrapper>
  </>
)
const ComponentGroup = ({ data: { page, allPages },location }) => {
  
  // Get compontents from this group
  const componentsInGroup = {
    links: allPages.hasOwnProperty('edges')
      ? allPages.edges.filter(category => {
        if(category.node.frontmatter.category === page.frontmatter.title) {
          return {  ...category.node}
        }

        else {
          return null;
        }
      })
      : false   
  }
  
  
  const componentsLinks = componentsInGroup.links;
  // Sort and arrange them in categories 
  
  const breadcrumb = {  
    title: page.frontmatter.title,
    location: location
  }

  
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      menu={true}
      breadcrumb={breadcrumb}
      backgroundClass={page.frontmatter.background}
    >
      <ComponentGroupTemplate 
        {...page} 
        {...page.frontmatter} 
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        blockquote={page.frontmatter.blockquote}
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
        previewImage
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