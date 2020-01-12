import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Footer from './Footer'
import Header from './Header'

// import 'lfui/dist/lf.css';
import 'modern-normalize/modern-normalize.css'
import "../components/_base/index.css"


export default ({ 
  
  children, 
  meta, 
  title,
  breadcrumb,
  backgroundClass,
  menu
  }) => {

  
  return (
    
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              title
              headline
            }
          }
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
          }
          
          
        }
      `}
      render={data => {
        const { siteTitle  } =     //googleTrackingId
            data.settingsYaml || {}
       
        
        return (
          
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
              bodyAttributes={{
                class: backgroundClass
              }}
            > 
              {title}
              <link href="" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="" />
              <meta name="robots" content="noindex" />
              {/* Add font link tags here */}
            </Helmet>

            <Meta
              // googleTrackingId={googleTrackingId}
              {...meta}
              {...data.settingsYaml}
            />

           
              <Header 
                title={data.site.siteMetadata.title} 
                breadcrumb={breadcrumb}
                menu={menu}
              />
              
              {children}
              <Footer />            
            
          </Fragment>
        )
      }}
    />
  )
}
