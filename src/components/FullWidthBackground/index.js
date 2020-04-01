import React from 'react'
import style from './index.module.css';
import Img from "gatsby-image"

const FullWidthBackground = ({ image, children }) => {

  return (  
       <div className={style.FullWidthBackground}>
        <Img fluid={image} />
        <div className={style.FullWidthBackground__container}>
          <article className={style.FullWidthBackground__content}>
            {children}
          </article>
        </div>
      </div>
  )
}

export default FullWidthBackground