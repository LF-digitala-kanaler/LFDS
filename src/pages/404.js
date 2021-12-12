import { StaticQuery, graphql } from 'gatsby'

import Heading from '../components/Heading'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import React from 'react'
import Wrapper from '../components/Wrapper'

const center = {
  marginTop: '100px',
}
const ErrorPage = () => (
  <StaticQuery
    query={graphql`
      query NotFoundPageQuery {
        globalSettings: settingsYaml {
          siteTitle
        }
      }
    `}
    render={() => (
      <Layout backgroundClass={'bg-white'}>
        <Helmet>
          <title>404 – Page Not Found</title>
        </Helmet>
        <Wrapper tag="div" menu={true}>
          <div style={center}>
            <Heading tag={1} text={'Does not compute…'} align={'center'} />
          </div>
        </Wrapper>
      </Layout>
    )}
  />
)
export default ErrorPage
