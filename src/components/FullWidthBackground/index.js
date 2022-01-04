import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'

import React from 'react'
import style from './index.module.css'

const FullWidthBackground = ({ imageSource, children, title }) => {
  const images = withArtDirection(getImage(imageSource[0]), [
    {
      media: '(max-width: 820px)',
      image: getImage(imageSource[1])
    }
  ])

  return (
    <div className={style.FullWidthBackground}>
      {/* if inside netlify cms show regular image */}
      {typeof imageSource === 'string' ? (
        // <img alt="" className="Image" src={imageSource} />
        <p>0</p>
      ) : (
        <>
          <GatsbyImage
            className={style.FullWidthBackground__object}
            alt=""
            image={images}
          />
        </>
      )}
      {title && <h2 className={style.FullWidthBackground__title}>{title}</h2>}
      <div className={style.FullWidthBackground__container}>{children}</div>
    </div>
  )
}

export default FullWidthBackground
