import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import Content from '../components/Content'
import HeroBlock from '../components/HeroBlock'
import rehypeReact from 'rehype-react'
import Collapse from '../components/Collapse'
import LfuiWrapper from '../components/LfuiWrapper/'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    collapse: Collapse,
    lfuiwrapper: LfuiWrapper,
  },
}).Compiler
// Export Template for use in CMS preview
export const ArticlePageTemplate = ({
  title,
  intro,
  body,
  bodyHtml,
  heroBlock,
  wrapperWidth,
  contentTop,
}) => (
  <>
    <Wrapper tag="div" menu={true} narrow>
      <Heading tag={1} text={title} align={'left'} />
      <Preamble text={intro} tag="p" align={'left'} />
      <Content source={contentTop} />
    </Wrapper>
    
    {heroBlock && (
      <HeroBlock
        background={heroBlock.color}
        quote={heroBlock.quote}
        cite={heroBlock.cite}
        image={heroBlock.image}
      />
    )}
    <Wrapper tag="div" menu={true} narrow={wrapperWidth ? false : true}>
      {bodyHtml ? (
        <div
          className={`Content  ${
            wrapperWidth === true ? 'Content--normal' : 'Content--tight'
          }`}
        >
          {renderAst(bodyHtml)}
        </div>
      ) : (
        <Content
          className={`Content  ${
            wrapperWidth === true ? 'Content--normal' : 'Content--tight'
          }`}
          source={body}
        />
      )}
    </Wrapper>
  </>
)
const ArticlePage = ({ data: { page }, location }) => {
  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location,
  }
  console.log(page.frontmatter.heroBlock)
  return (
    <Layout
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
      breadcrumb={breadcrumb}
      menu={true}
    >
      <ArticlePageTemplate
        {...page}
        {...page.frontmatter}
        heroBlock={page.frontmatter.heroBlock}
        bodyHtml={page.htmlAst}
        body={page.html}
        wrapperWidth={page.frontmatter.wide}
        contentTop={page.frontmatter.contentTop}
      />
    </Layout>
  )
}

export default ArticlePage

// Get data from GraphiQL

export const pageQuery = graphql`
  query ArticlePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      htmlAst
      html
      frontmatter {
        title
        intro
        template
        category
        wide
        lang
        contentTop
        heroBlock {
          color
          quote
          cite
          image {
            publicURL
          }
        }
      }
    }
  }
`
