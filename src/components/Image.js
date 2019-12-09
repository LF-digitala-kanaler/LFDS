import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img  fluid={image.childImageSharp.fluid}  />
    )
  }

  if (!!childImageSharp) {
    return <Img  fluid={childImageSharp.fluid}  />
  }

  if (!!image && typeof image === 'string')
    return <img  src={image}  />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage