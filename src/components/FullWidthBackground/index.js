import React from 'react'
import style from './index.module.css';

const FullWidthBackground = ({ image, content }) => {
  const inlineStyle= {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  }
  return (  
       <div
          className={style.FullWidthBackground}
          style={inlineStyle}
        >
        {content}
        </div>
  )
}

export default FullWidthBackground