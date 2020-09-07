import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import icons from '!!raw-loader!lfui-components/dist/lfui/icons.svg'; 
import iconsRegular from '!!raw-loader!lfui-components/dist/docs/icons/regular.md';
import iconsSpecial from '!!raw-loader!lfui-components/dist/docs/icons/special.md'; 
import Content from '../components/Content';
import rehypeReact from "rehype-react"
import Collapse from '../components/Collapse';
 const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { 
      "collapse": Collapse
    },
  }).Compiler

export const IconsPageTemplate = ({
  title,
  intro,
  body,
  bodyHtml,
  specialIconsContent,
}) => (
  <> 
    <Wrapper tag="div" narrow menu={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      {bodyHtml
        ? <div className="Content Content--tight">{renderAst(bodyHtml)}</div>
        : <Content className="Content Content--tight" source={body} />
      }
      
    </Wrapper>
    
    <Wrapper  tag="div"  menu={true}>
      <div className="Icons">
        <Content source={iconsRegular} />

        <Content className="Content--tight" source={specialIconsContent} />
        
        <Content source={iconsSpecial} /> 
        <Content source={icons} /> 
      </div>
    </Wrapper>
  
  </>
)
const IconsPage = ({ 
  data: { page },
  location
  }) => {

  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location
  }
  return (
    <Layout
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
      specialIconsContent={page.frontmatter.specialIconsContent}
      menu={true}
      breadcrumb={breadcrumb}
      backgroundClass={page.frontmatter.background}
    >
      <IconsPageTemplate 
        {...page} 
        {...page.frontmatter}
        bodyHtml={page.htmlAst}
        body={page.html}
      />
    </Layout>
  )
}

export default IconsPage

export const pageQuery = graphql`
  ## Query for IconsPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query IconsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      htmlAst
      frontmatter {
        title
        intro
        background
        specialIconsContent
        
      }
    }
  }
`
