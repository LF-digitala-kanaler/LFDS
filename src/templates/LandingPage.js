import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Blockquote from '../components/Blockquote';
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import CardGrid from '../components/CardGrid';
import _ from 'lodash';


// Export Template for use in CMS preview
export const LandingPageTemplate = ({
  title,
  intro,
  blockquote,
  categories = [],

  
}) => (
   
  <>
    <Wrapper tag="div"  narrow>
      <Heading tag={1} text={title} align={"center"} />
      <Preamble text={intro} tag="p" align={"center"} />
    </Wrapper>
    <Wrapper tag="div"  narrow>
      <CardGrid list={categories}  />
    </Wrapper>
      {/* <Changelog />  */}
    <Wrapper tag="div" narrow>
      { blockquote && <Blockquote text={blockquote.text} author={blockquote.author} /> }
    </Wrapper>
  </>
)
const LandingPage = ({ data: { page, allPages },currentDirectory, location }) => {
  
  if(typeof window !== `undefined`) {
    currentDirectory = location.href.split('/').filter(Boolean).pop();
   }

  const children = {
    items: allPages.hasOwnProperty('edges')
      ? allPages.edges.filter(items => (items.node.fields.contentType.includes(currentDirectory)))
      : false
  }

  
  const groups = _(children.items)
  .chain()
  .groupBy('node.frontmatter.category')
  .map((value, key) => ({ category: key,  link: value}))
  .value()

  const groupsSorted = _.orderBy(groups, [item => item.category.toLowerCase()], ['asc']);
  
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
        categories={groupsSorted}

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
            previewImage{
              publicURL
            }
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