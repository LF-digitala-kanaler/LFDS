import React from 'react'
import style from './index.module.css';
import Img from "gatsby-image"

const FullWidthBackground = ({ image, children }) => {
  return (  
       <div className={style.FullWidthBackground}>
         {/* if inside netlify cms show regular image */}
        {typeof image === "string" ? <img alt="" class="Image" src={image} /> : <Img fluid={image} />}
        <div className={style.FullWidthBackground__container}>
          <article className={style.FullWidthBackground__content}>
            {children}
          </article>
        </div>
      </div>
  )
}

export default FullWidthBackground