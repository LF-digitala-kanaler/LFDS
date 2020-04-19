import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import icons from '!!raw-loader!lfui-components/dist/lfui/icons.svg'; 
import iconsRegular from '!!raw-loader!lfui-components/dist/docs/icons/regular.md';
import iconsSpecial from '!!raw-loader!lfui-components/dist/docs/icons/special.md'; 
import Content from '../components/Content'
import Button from '../components/Button/'
import {ButtonListItem, ButtonList} from '../components/ButtonList/'

export const IconsPageTemplate = ({
  title,
  intro,
  body,
  specialIconsContent,
  buttons
}) => (
  <> 
    <Wrapper tag="div" narrow>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
      <div class="Position-relative">
        <Content source={body} className="Content--tight" />
        
        {buttons && buttons.length > 0 && 
          <ButtonList>
          {
            buttons.map(btn => {
              return <ButtonListItem><Button href={btn.link} text={btn.text} /></ButtonListItem>
            })
          }
          </ButtonList>
        }
      </div>
      
      
    </Wrapper>
    
    <Wrapper  tag="div" narrow>
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
  console.log(page)
  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location
  }
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      specialIconsContent={page.frontmatter.specialIconsContent}
      menu={true}
      breadcrumb={breadcrumb}
      backgroundClass={page.frontmatter.background}
    >
      <IconsPageTemplate 
        {...page} 
        {...page.frontmatter}
        body={page.html}
        buttons={page.frontmatter.buttons}
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
      ...Meta
      html
      frontmatter {
        title
        intro
        background
        specialIconsContent
        buttons {
          text
          link
        }
      }
    }
  }
`
