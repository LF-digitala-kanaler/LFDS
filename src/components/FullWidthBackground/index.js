import * as style from './index.module.css'

import Img from 'gatsby-image'
import React from 'react'

const FullWidthBackground = ({ image, children, title }) => {
  return (
    <div className={style.FullWidthBackground}>
      {/* if inside netlify cms show regular image */}
      {typeof image === 'string' ? (
        <img alt="" className="Image" src={image} />
      ) : (
        <Img fluid={image} />
      )}
      {title && <h2 className={style.FullWidthBackground__title}>{title}</h2>}
      <div className={style.FullWidthBackground__container}>{children}</div>
    </div>
  )
}

export default FullWidthBackground
