import IconsPageTemplate from './IconsTemplate.js'
import Layout from '../components/Layout.js'
import React from 'react'
import _ from 'lodash'
import flow from 'lodash/fp/flow'
import { graphql } from 'gatsby'
import groupBy from 'lodash/fp/groupBy'

const map = require('lodash/fp/map').convert({ cap: false })

const IconsPage = ({ data: { page, icons }, location }) => {
  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location,
  }

  // group icons by directory
  const iconList = flow(
    groupBy('node.relativeDirectory'),
    map((icon, group) => {
      const icons = icon.map((icon) => icon.node)
      return {
        group,
        icons,
      }
    })
  )(icons.edges)

  // split into 2, one for "normal icons" and one for "special"

  let iconsRegular = iconList.filter((item) => !item.group.includes('special/'))
  let iconsSpecial = iconList.filter((item) => item.group.includes('special/'))

  // sort them
  iconsRegular = _.orderBy(iconsRegular, ['group'], ['asc'])
  iconsSpecial = _.orderBy(iconsSpecial, ['group'], ['asc'])

  // const sortedIconListSpecial = _.orderBy(iconListSpecial, ['group'], ['asc'])
  //console.log(sortedIconList)
  return (
    <Layout
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
      specialIconsContent={page.frontmatter.specialIconsContent}
      menu={true}
      breadcrumb={breadcrumb}
    >
      <IconsPageTemplate
        {...page}
        {...page.frontmatter}
        bodyHtml={page.htmlAst}
        body={page.html}
        iconsRegular={iconsRegular}
        iconsSpecial={iconsSpecial}
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
        specialIconsContent
      }
    }
    icons: allFile(filter: { sourceInstanceName: { eq: "icons" } }) {
      edges {
        node {
          svgData
          name
          relativeDirectory
        }
      }
    }
  }
`
