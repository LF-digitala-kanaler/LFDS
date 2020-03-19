import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const FullWidthBackground = ({ className, children }) => {
  const { desktop, small } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "static/img/panel.svg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        
      }
    `
  )
  const imageData = desktop.childImageSharp.fluid
  
  return (
    
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}      
        id="adfullscreenbg"
        role="img"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    
  )
}


export default FullWidthBackground