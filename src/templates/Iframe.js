import React, {useRef, useEffect, useState} from 'react'

import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Content from '../components/Content'
import css from '!!raw-loader!lfui/dist/lf.css'

import svg from '!!raw-loader!lfui/dist/icons.svg'; 
import InnerHTML from 'dangerously-set-html-content'

const IframeTemplate = ({ body }) => {

 
return (
  <>
   <Helmet> 
    <link href="" rel="preconnect" crossorigin />
    <meta name="robots" content="noindex" />
    <style>{css}</style>

    <style>{' body{padding: 16px; background-color:#fff'}</style>
  </Helmet>
  
  <InnerHTML html={body} />
  <Content source={svg} />
  
  </>
  )
}

const IframePage = ({ data: { page } }) => (

  <div>
    <IframeTemplate {...page} body={page.content} />
  </div>
)
export default IframePage

export const pageQuery = graphql`
  query HTMLPage($name: String!) {
    page: htmlContent(name: { eq: $name }) {
      id
      name
      content
      slug
    }
  }
`
