import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';


// Export Template for use in CMS preview
export const ChangelogPageTemplate = ({
  title,
  intro
  
}) => (
   
  <>
  <Wrapper tag="div" menu={true} narrow={true}>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
  </Wrapper>
  </>
)
const ChangelogPage = ({ data: { page, log }, location } ) => {

  const breadcrumb = { 
    title: page.frontmatter.title,
    location: location
  }

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      breadcrumb={breadcrumb}
      backgroundClass={page.frontmatter.background}
      menu={true}
    >
      <ChangelogPageTemplate 
        {...page} 
        {...page.frontmatter} 
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
      />
    </Layout>
  )
}

export default ChangelogPage

export const pageQuery = graphql`
  
  
  query ChangelogPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      frontmatter {
        title
        intro
        background
      }
    }
    
    
  }
`


// log: github {
//      organization(login: "LF-digitala-kanaler") {
//         repository(name: "LFUI") {
//           releases(last: 60, orderBy: {
//             field: CREATED_AT
//             direction: DESC
//           }) {
//             edges {
//               node {
//                 name
//                 descriptionHTML
//                 publishedAt
//                 shortDescriptionHTML(limit:100)
//               }
//             }
//           }
//         }
//       }
//     }