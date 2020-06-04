import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Footer from './Footer'
import Header from './Header'
import css from '!!raw-loader!lfui-components/dist/docs/docs.css'; 

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
       
            {
              if(typeof window !== `undefined`) {
              window.location.replace("https://lf-digitala-kanaler.github.io")
              }
            }
        return (
          
          <Fragment>
            
            <Helmet
              defaultTitle="LFDS"
              titleTemplate={`%s | ${siteTitle}`}
              bodyAttributes={{
                class: backgroundClass
              }}
              htmlAttributes={{
                lang: `en`
              }}
            > 
              {title}
              <link href="" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="" />
              <meta name="robots" content="noindex" />
            </Helmet>

            <Meta
              // googleTrackingId={googleTrackingId}
              {...meta}
              {...data.settingsYaml}
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
