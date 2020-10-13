import React from 'react'
import style from './index.module.css'
import Img from 'gatsby-image'

const FullWidthBackground = ({ image, children, title }) => {
  
  
  return (
    <div className={style.FullWidthBackground}>
      {/* if inside netlify cms show regular image */}
      {typeof image === 'string' ? (
        <img alt="" class="Image" src={image} />
      ) : (
        <Img fluid={image} />
      )}
      {title && <h2 className={style.FullWidthBackground__title}>{title}</h2> }
      <div className={style.FullWidthBackground__container}>
       {children}
      </div>
    </div>
  )
}

export default FullWidthBackground
