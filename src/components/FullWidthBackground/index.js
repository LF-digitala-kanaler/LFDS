import React from 'react'
import style from './index.module.css';

const FullWidthBackground = ({ image, children }) => {
  console.log(image)
  const inlineStyle= {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  }
  return (  
       <div
          className={style.FullWidthBackground}
          style={inlineStyle}
        >
        <div className={style.FullWidthBackground__container}>
          <article className={style.FullWidthBackground__content}>
            {children}
          </article>
        </div>
      </div>
  )
}

export default FullWidthBackground