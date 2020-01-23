import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import _get from 'lodash/get'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Layout from '../components/Layout'

const center = {
  marginTop: '100px'
}
export default ({ children }) => (
  
  <StaticQuery
    query={graphql`
      query NotFoundPageQuery {
        globalSettings: settingsYaml {
          siteTitle
        }
      }
    `}
    render={data => (
      
      <Layout
        backgroundClass={'bg-white'}
      >
        <Helmet>
          <title>404 – Page Not Found</title>
        </Helmet>
        <Wrapper tag="div" menu={true} >
          <div style={center}>
            <Heading tag={1} text={"Does not compute…"} align={"center"} />
          </div>
        </Wrapper>
      </Layout>
    )}
  />
)
