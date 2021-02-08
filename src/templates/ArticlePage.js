import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import ArticlePageTemplate from './ArticlePageTemplate.js'


const ArticlePage = ({ data: { page }, location }) => {
  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location,
  }
  
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
        contentTop={page.frontmatter.contentTop
         }
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
