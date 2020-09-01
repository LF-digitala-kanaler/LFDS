import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import Shortcut from '../components/Shortcut'
import FullWidthBackground from '../components/FullWidthBackground'
import Content from '../components/Content'
import Changelog from '../components/Changelog'
import LinkList from '../components/LinkList'
import SearchBlock from '../components/SearchBlock'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
export const HomePageTemplate = ({
  title,
  intro,
  shortcuts,
  shortcutsBottom,
  fullWidthImage,
  body,
  relatedLinks
}) => (
  
  <> 
  
    <Wrapper wide tag="div">
      <Heading tag={1} text={title} align={"center"} />
      <Preamble text={intro} tag="p" align={"center"} />
    </Wrapper>
    <SearchBlock />
    <Wrapper wide tag="div">
      <Row gutter={64} justify="center">
        { shortcuts &&
          shortcuts.map(item => {
            return <Col sm={6} md={4}  key={item.title}><Shortcut title={item.title} icon={item.icon.publicURL ? item.icon.publicURL : item.icon } text={item.text} path={item.link} /></Col>
          })
        }
      </Row>
    </Wrapper>
    {fullWidthImage && <FullWidthBackground image={fullWidthImage.childImageSharp ? fullWidthImage.childImageSharp.fluid.src : fullWidthImage}><Content source={body} /> </FullWidthBackground>}
    <Wrapper wide tag="div">
      <Row gutter={64} justify="center">
        { shortcutsBottom &&
          shortcutsBottom.map(item => {
            return <Col sm={6} md={4}  key={item.title}><Shortcut title={item.title} icon={item.icon.publicURL ? item.icon.publicURL : item.icon } text={item.text} path={item.link} /></Col>
          })
        }
      </Row>
      <Row gutter={128} >
        <Col md={6}>
           <Heading tag={3} text={"Release info"} align={"left"} />
          <Changelog />
        </Col>
        <Col md={6}>
          <Heading tag={3} text={"Links you cant live without"} align={"left"} />
          {
            relatedLinks.length && <LinkList items={relatedLinks} />
          }
          
        </Col>
      </Row>
    </Wrapper>
  </>
)
const HomePage = ({ 
  data: { page }
  
  }) => {
  
  const sources = [
    page.frontmatter.fullWidthImage.childImageSharp.fluid,
    {
      ...page.frontmatter.fullWidthImageMobile.childImageSharp.fluid,
      media: `(max-width: 820px)`,
    },
  ]
  
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      backgroundClass={page.frontmatter.background}
    >
      <HomePageTemplate 
        {...page} 
        {...page.frontmatter}
        shortcuts={page.frontmatter.shortcuts}
        shortcutsBottom={page.frontmatter.shortcutsBottom}
        fullWidthImage={sources}
        relatedLinks={page.frontmatter.relatedLinks}
        body={page.html}
      />
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        intro
        background
        shortcuts {
          icon{
            publicURL
          }
          title
          text
          link
        }
        shortcutsBottom {
          icon{
            publicURL
          }
          title
          text
          link
        }
        relatedLinks {
          text
          url
        }
        fullWidthImage {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 84, maxHeight: 493) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fullWidthImageMobile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 84) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    
  }
`
