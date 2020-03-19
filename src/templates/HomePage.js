import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import Shortcut from '../components/Shortcut'
import { Grid, Cell } from "styled-css-grid";
import FullWidthBackground from '../components/FullWidthBackground'


export const HomePageTemplate = ({
  title,
  intro,
  shortcuts
}) => (
  
  <> 
    <Wrapper wide tag="div">
      <Heading tag={1} text={title} align={"center"} />
      <Preamble text={intro} tag="p" align={"center"} />
      <Grid columns={3} gap="64px">
        {
          shortcuts.map(item => {
            return <Cell middle key={item.title}><Shortcut title={item.title} icon={item.icon} text={item.text} path={item.link} /></Cell>
          })
        }
      </Grid>
    </Wrapper>
    {/* <FullWidthBackground>test</FullWidthBackground> */}
  </>
)
const HomePage = ({ 
  data: { page }

  },) => {
  console.log(page)

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
          icon
          title
          text
          link
        }
        fullWidthImage
      }
    }
    
  }
`
