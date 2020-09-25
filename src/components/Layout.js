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
      render={data => {
        
        description = meta?.description ?  meta.description : description;
        console.log(description)
        const {  socialMediaCard, siteUrl, siteTitleAbbreviation  } =    
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
