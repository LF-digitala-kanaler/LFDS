import React, {useContext}  from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Blockquote from '../components/Blockquote';
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import CardGrid from '../components/CardGrid';
import _ from 'lodash';
import {GlobalStateContext } from "../context/GlobalContextProvider"
import Content from '../components/Content'

// Export Template for use in CMS preview
export const LandingPageTemplate = ({
  title,
  intro,
  body,
  contentBottom,
  blockquote,
  categories = [],

  
}) => {
  const state = useContext(GlobalStateContext);
  return <div className={(state && state.isMenuOpenDesktop ? 'Container Container--push' : "Container")}>
    <Wrapper tag="div"  narrow >
      <Heading tag={1} text={title} align={"center"} />
      <Preamble text={intro} tag="p" align={"center"} />
      { body && <Content className="Content--left" source={body}  /> }
    </Wrapper>
    <CardGrid list={categories}  />
    <Wrapper tag="div" narrow>
      { contentBottom && <Content source={contentBottom}  /> }
      { blockquote && <Blockquote text={blockquote.text} author={blockquote.author} /> }
    </Wrapper>
  </div>

}
const LandingPage = ({ data: { page, allPages, allOverviewPages },currentDirectory, location }) => {
  console.log(page, 'page')
  if(typeof window !== `undefined`) {
    currentDirectory = location.pathname.split('/').filter(Boolean).pop();
   }
  // get all overview pages on current page
  const overviewPages = {
    items: allOverviewPages.hasOwnProperty('edges')
      ? allOverviewPages.edges.filter(items => (items.node.fields.contentType.includes(currentDirectory)))
      : false
  }
  console.log(overviewPages.items, 'items')
  const overViewGroups = _(overviewPages.items)
  .chain()
  .map((item) => {
    
    return {
      category: (item.node.fields.contentType.split("/").pop()).toLowerCase().replace(/\-/g, ' '),  
      previewImage: item.node.frontmatter.previewImage,
    }
  })
  .value()
  // get all article pages on current page that does not have a category
  const children = {
    items: allPages.hasOwnProperty('edges')
      ? allPages.edges.filter(items => (items.node.fields.contentType.includes(currentDirectory) && items.node.frontmatter.hidden !== true))
      : false
  }
  
  const groups = _(children.items)
  .chain()
  .groupBy('node.frontmatter.category')
  .map((value, key) => ({ category: (key).toLowerCase(),  link: value, previewImage: overViewGroups.previewImage}))
  .value()

  const groupsSorted = _.orderBy(groups, [(item) => {
    const nestedObj = _.get(item, 'link');
    item['link'] = _.orderBy(nestedObj,['node.frontmatter.priority', 'node.frontmatter.title'],['asc', 'asc']);
      return [item.category, item['link']];
  }], 'asc', 'asc');
  
  var merged = _.merge(_.keyBy(overViewGroups, 'category'), _.keyBy(groupsSorted, 'category'));
  var concatCategories = _.values(merged);
  

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      backgroundClass={page.frontmatter.background}
      menu={true}
    >
      <LandingPageTemplate 
        {...page} 
        {...page.frontmatter} 
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        body={page.html}
        contentBottom={page.fields.frontmattermd.contentBottom?.html || page.frontmatter.contentBottom}
        blockquote={page.frontmatter.blockquote}
        categories={concatCategories}
      />
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query LandingPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        intro
        background
        contentBottom
        blockquote {
          text
          author
        }
      }
      fields {
        frontmattermd {
          contentBottom {
            rawMarkdownBody
            html
          }
        }
      }
    }
    
    allPages: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "/^((?!index).)*$/"} },
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            title
            lang
            hidden
            previewImage{
              publicURL
            }
          }
          fields {
            slug
            contentType
          }
        }
      }
    }

    allOverviewPages: allMarkdownRemark(filter: {frontmatter: {template: {eq: "CategoryOverview"}}}, sort: {order: ASC, fields: [frontmatter___title]}) {
      edges {
        node {
          id
          frontmatter {
            category
            title
            lang
            previewImage {
              publicURL
            }
          }
          fields {
            slug
            contentType
          }
        }
      }
    }

  }
`