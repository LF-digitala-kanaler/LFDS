import { graphql } from 'gatsby'
import React from 'react'

const IframeTemplate = ({ children }) => {
  return <div>{children}</div>
}

export default IframeTemplate

export const pageQuery = graphql`
  query HTMLPage($name: String!) {
    htmlContent(name: { eq: $name }) {
      id
      name
      content
      slug
    }
  }
`
