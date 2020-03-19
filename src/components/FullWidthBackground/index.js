import React from 'react'
import style from './index.module.css';

const FullWidthBackground = ({ image, children }) => {
  const inlineStyle= {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  }
  return (  
       <div
          className={style.FullWidthBackground}
          style={inlineStyle}
        >
        {children}
        </div>
  )
}


export default FullWidthBackground