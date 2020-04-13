import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import Content from '../components/Content';
import HeroBlock from '../components/HeroBlock'
import rehypeReact from "rehype-react"
import Collapse from '../components/Collapse'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "Collapse": Collapse }
}).Compiler
// Export Template for use in CMS preview
export const ArticlePageTemplate = ({
  title,
  intro,
  body,
  heroBlock,
  wrapperWidth
}) => (
  
  <> 
  
    <Wrapper tag="div" menu={true}  narrow>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
    </Wrapper>
      {heroBlock &&
        <HeroBlock background={heroBlock.color} content={heroBlock.content} />
      }
      <Wrapper tag="div" menu={true} narrow={wrapperWidth ? false : true} wide={wrapperWidth ? true : false}>
        <div class="Content">{renderAst(body)}</div> 
    </Wrapper>
  </>
)
const ArticlePage = ({ 
  data: { page }
  
  },) => {
  
  const wrapperWidth = page.frontmatter.wide ? true : false;

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      menu={true}
      backgroundClass={page.frontmatter.background}
      
    >
      <ArticlePageTemplate 
        {...page} 
        {...page.frontmatter}
        heroBlock={page.frontmatter.heroBlock}
        body={page.htmlAst}
        wrapperWidth={wrapperWidth}
      />
    </Layout>
  )
}

export default ArticlePage


// Get data from GraphiQL

export const pageQuery = graphql`

  
  query ArticlePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      htmlAst
      
      frontmatter {
        title
        intro
        template
        category
        background
        wide
        lang
        heroBlock {
          content
          color
        }
      }
    }
  }
`
