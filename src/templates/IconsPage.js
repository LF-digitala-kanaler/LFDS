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

  // transorm icon data to something we can use in tempalte
  const iconList = flow(
    groupBy('node.relativeDirectory'),

    map((icon, group) => {
      let icons = icon.filter(icon => icon.node.name !== 'icons')
      icons = icons.map((icon) => {
        let widthStr = icon.node.svgData.match(/"([^width"=]+)"/)[1];
        let heightStr = icon.node.svgData.match(/"([^height"=]+)"/)[1]
        icon.node.width = widthStr;
        icon.node.height = heightStr;
        return (
          icon.node
        )

      })
      return {
        group,
        icons,
      }
    }),

  )(icons.edges)
  // split into 2, one for "normal icons" and one for "special"

  let iconsRegular = iconList.filter((item) => !item.group.includes('special/'))
  let iconsSpecial = iconList.filter((item) => item.group.includes('special/'))

  // sort them
  iconsRegular = _.orderBy(iconsRegular, ['group'], ['asc'])
  iconsSpecial = _.orderBy(iconsSpecial, ['group'], ['asc'])

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
