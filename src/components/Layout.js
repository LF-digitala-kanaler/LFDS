import 'modern-normalize/modern-normalize.css'
import '../components/_base/index.css'

import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './Footer'
import Header from './Header'
import Helmet from 'react-helmet'
import Meta from './Meta'
import css from '!!raw-loader!@lf-digitala-kanaler/lfui-components/dist/docs/docs.css'
import { stripTrailingSlash } from '../utils/RemoveTrailingSlash'

const App = ({
  children,
  title,
  description,
  breadcrumb,
  backgroundClass,
  menu,
  meta
}) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            siteUrl
            siteTitleAbbreviation
            socialMediaCard {
              image
            }
          }
        }
      `}
      render={(data) => {
        description = meta?.description ? meta.description : description
        const { socialMediaCard, siteUrl, siteTitleAbbreviation } =
          data.settingsYaml || {}
        return (
          <Fragment>
            <Helmet
              titleTemplate={`%s`}
              defaultTitle={`${title} | ${siteTitleAbbreviation}`}
              bodyAttributes={{
                class: backgroundClass
              }}
              htmlAttributes={{
                lang: `en`
              }}
            >
              {title}
              <link rel="icon" href="/favicon.ico" sizes="any" />
              <link rel="icon" href="/icon.svg" type="image/svg+xml" />
              <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </Helmet>

            <Meta
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                stripTrailingSlash(siteUrl) + socialMediaCard.image
              }
              // If there is no meta description added to cms use the intro field instead
              pageTitle={title}
              description={description}
              {...data.settingsYaml}
              {...meta}
            />

            <Header
              title={data.settingsYaml.siteTitle}
              breadcrumb={breadcrumb}
              menu={menu}
            />

            {children}
            <Footer />
            <style>{css}</style>
          </Fragment>
        )
      }}
    />
  )
}

export default App
