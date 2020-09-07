import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Footer from './Footer'
import Header from './Header'
import css from '!!raw-loader!lfui-components/dist/docs/docs.css'; 
import { stripTrailingSlash } from '../utils/RemoveTrailingSlash';
// import 'lfui/dist/lf.css';
import 'modern-normalize/modern-normalize.css'
import "../components/_base/index.css"


export default ({ 
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
          site {
            siteMetadata {
              headline
            }
          }
          settingsYaml {
            siteHeadline
            siteDescription
            siteUrl
            socialMediaCard {
              image
            }
          }
          
          
        }
      `}
      render={data => {
        const { siteHeadline, socialMediaCard, siteUrl  } =    
            data.settingsYaml || {}
        return (
          
          <Fragment>
            <Helmet
              defaultTitle={`${title} | ${siteHeadline}`}
              bodyAttributes={{
                class: backgroundClass
              }}
              htmlAttributes={{
                lang: `en`
              }}
            > 
              {title}
              <meta name="robots" content="noindex" />
            </Helmet>

            <Meta
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                stripTrailingSlash(siteUrl) + socialMediaCard.image
              }
              description={description}
              {...data.settingsYaml}
              {...meta}
            />

            
              <Header 
                title={data.site.siteMetadata.headline} 
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
