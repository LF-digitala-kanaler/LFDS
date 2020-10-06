import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import TabsWrapper from '../components/Tabs'
import ComponentExample from '../components/ComponentExample'
import { Location, navigate, globalHistory } from '@reach/router'
import ComponentVersion from '../components/ComponentVersion'
import Deprecated from '../components/Deprecated'

export const ComponentPageTemplate = ({
  title,
  intro,
  componentsExample,
  componentsNavigation,
  backgroundColor,
  tabs,
  currentDirectory,
  verticalResize,
}) => (
  <>
    {currentDirectory && <Deprecated status={currentDirectory} />}
    <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={'left'} />
      {currentDirectory && <ComponentVersion version={currentDirectory} />}
    </Wrapper>
    <Wrapper tag="div" menu={true} narrow>
      <Preamble text={intro} tag="p" align={'left'} />
    </Wrapper>
    <Wrapper tag="div" menu={true}>
      {componentsExample && componentsExample.length > 0 && (
        <ComponentExample
          verticalResize={verticalResize}
          variants={componentsExample}
          navigation={componentsNavigation}
          background={backgroundColor}
        />
      )}
    </Wrapper>

    <Location>
      {({ location }) => (
        <TabsWrapper tabs={tabs} location={location} navigate={navigate}>
          {currentDirectory && (
            <Deprecated fixed={true} status={currentDirectory} />
          )}
        </TabsWrapper>
      )}
    </Location>
  </>
)

const ComponentPage = ({
  data: { page, allComponentExample },
  location,
  currentDirectory,
}) => {
  // window is not avalible during gatsby build
  if (typeof window !== `undefined`) {
    const path = globalHistory.location.pathname
    currentDirectory = path.split('/').filter(Boolean).pop()
  }
  const toKebabCase = (str) =>
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')
  const componentExample = {
    examples: allComponentExample.hasOwnProperty('edges')
      ? allComponentExample.edges.filter(
          (exemple) =>
            toKebabCase(
              exemple.node.relativeDirectory.split('/').pop()
            ).toLowerCase() === currentDirectory
        )
      : false,
  }

  const breadcrumb = {
    category: page.frontmatter.category,
    title: page.frontmatter.title,
    location: location,
  }

  return (
    <Layout
      meta={page.frontmatter.meta || false}
      description={page.frontmatter.intro || false}
      title={page.frontmatter.title || false}
      breadcrumb={breadcrumb}
      menu={true}
      backgroundClass={'bg-smoke'}
    >
      <ComponentPageTemplate
        {...page}
        {...page.frontmatter}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        tabs={page.fields.frontmattermd?.tabs || page.frontmatter.tabs}
        category={page.frontmatter.category}
        componentsExample={componentExample.examples}
        componentsNavigation={page.frontmatter.componentsNavigation}
        backgroundColor={page.frontmatter.backgroundColor}
        currentDirectory={currentDirectory}
        priority={page.frontmatter.priority}
        verticalResize={page.frontmatter.verticalResize}
      />
    </Layout>
  )
}

export default ComponentPage

// Get data from GraphiQL

export const pageQuery = graphql`
  query ComponentPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html

      frontmatter {
        title
        intro
        template
        category
        verticalResize
        componentsNavigation {
          name
        }
        previewImage {
          publicURL
        }
        backgroundColor
        tabs {
          name
          content
        }
      }
      fields {
        frontmattermd {
          tabs {
            content {
              html
              headings {
                value
              }
            }
            name {
              rawMarkdownBody
            }
          }
        }
      }
    }
    allComponentExample: allHtmlContent {
      edges {
        node {
          slug
          id
          name
          content
          relativeDirectory
        }
      }
    }
  }
`
