import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import Content from '../components/Content';
import FullWidthBackground from '../components/FullWidthBackground'

// Export Template for use in CMS preview
export const ArticlePageTemplate = ({
  title,
  intro,
  body,
  heroImage,
  wrapperWidth
}) => (
  
  <> 
  
    <Wrapper tag="div" menu={true}  narrow>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
    </Wrapper>
      {heroImage && <FullWidthBackground image={heroImage.childImageSharp ? heroImage.childImageSharp.fluid.src : heroImage.heroImageDesktop}><Content source={heroImage.content} /> </FullWidthBackground>}
      <Wrapper tag="div" menu={true} narrow={wrapperWidth ? false : true} wide={wrapperWidth ? true : false}>
        <Content source={body} />   
    </Wrapper>
  </>
)
const ArticlePage = ({ 
  data: { page }
  
  },) => {
   
    const wrapperWidth = page.frontmatter.wide ? true : false;

    
    if(page.frontmatter.heroBlock && page.frontmatter.heroBlock.heroImageDesktop.childImageSharp !== null){
       var sources = [
        page.frontmatter.heroBlock.heroImageDesktop.childImageSharp.fluid,
        {
          ...page.frontmatter.heroBlock.heroImageMobile.childImageSharp.fluid,
          media: `(max-width: 768px)`,
        },
      ]
    }
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
        heroImage={sources}
        body={page.html}
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
      html
      
      frontmatter {
        title
        intro
        template
        category
        background
        wide
        lang
        heroBlock {
          heroImageDesktop {
            childImageSharp {
              fluid(maxWidth: 4000, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heroImageMobile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content
          color
        }
      }
    }
  }
`
