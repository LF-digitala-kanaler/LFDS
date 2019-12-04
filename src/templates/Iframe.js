import React from 'react'
import { graphql } from 'gatsby'

const IframeTemplate = ({ data }) => {
  const post = data.htmlContent

  return <div dangerouslySetInnerHTML={{ __html: post.content }} />
}

export default IframeTemplate

