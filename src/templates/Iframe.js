import React from 'react'
import { graphql } from 'gatsby'

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