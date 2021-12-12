import 'modern-normalize/modern-normalize.css'
import '../components/_base/index.css'

import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './Footer'
import Header from './Header'
import Helmet from 'react-helmet'
import Meta from './Meta'
import css from '!!raw-loader!lfui-components/dist/docs/docs.css'
import { stripTrailingSlash } from '../utils/RemoveTrailingSlash'

const App = ({
  children,
  title,
  description,
  breadcrumb,
  backgroundClass,
  menu,
  meta,
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
                class: backgroundClass,
              }}
              htmlAttributes={{
                lang: `en`,
              }}
            >
              {title}
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicons/apple-touch-icon.png"
              />
              <link
                rel="mask-icon"
                href="/favicons/safari-pinned-tab.svg"
                color="#00427a"
              />
              <meta name="msapplication-TileColor" content="#2b5797" />
              <meta name="robots" content="noindex" />
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