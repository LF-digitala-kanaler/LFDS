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
export const CategoryOverviewTemplate = ({
  title,
  intro,
  blockquote,
  contentAbove,
  contentBelow,
  categoryPages
  
}) => (
   
  <>
  <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      <Content className="content" source={contentAbove} />   
      { categoryPages && <CardList list={categoryPages} /> }
      <Content className="content" source={contentBelow} />
     
      { blockquote && <Blockquote text={blockquote.text} author={blockquote.author} /> }
  </Wrapper>
  </>
)
const CategoryOverviewPage = ({ data: { page, allPages },location , currentDirectory}) => {

  if(typeof window !== `undefined`) {
    currentDirectory = location.href.split('/').filter(Boolean).pop();
   }


  const children = {
    links: allPages.hasOwnProperty('edges')
      ? allPages.edges.filter(category => {
        if(category.node.fields.contentType.includes(currentDirectory)) {
          return {  ...category.node}
        }
        else {
          return null;
        }
      })
      : false   
  }

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
      <CategoryOverviewTemplate 
        {...page} 
        {...page.frontmatter} 
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        blockquote={page.frontmatter.blockquote}
        categoryPages={children.links}
        contentAbove={page.frontmatter.contentAbove}
        contentBelow={page.frontmatter.contentBelow}
      />
    </Layout>
  )
}

export default CategoryOverviewPage

export const pageQuery = graphql`
  
  
  query CategoryOverviewPage($id: String!) {
    
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
            description
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