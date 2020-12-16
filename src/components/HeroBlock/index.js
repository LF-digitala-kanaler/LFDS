import React from 'react'
import style from './index.module.css'
import Wrapper from '../Wrapper'
import cx from 'classnames'

const HeroBlock = ({ background, quote, cite, image }) => {
  
  const backgroundStyle = {
    backgroundColor: background,
    backgroundImage: image ? `url(${image.publicURL})` : 'none',
    backgroundSize: 'cover',
  }
  console.log(image)
  return (
   <>
      {(image != null || background != null) && (
        <article className={cx(
            style.HeroBlock,
            image ? style['HeroBlock--image'] : ' '
          )} 
          style={backgroundStyle}
        >
        <Wrapper tag="div" menu={true} narrow>
          <div className={style.HeroBlock__container}>
            {quote &&
            <blockquote className={style.HeroBlock__quote}>
              <p className={style.HeroBlock__text}>{quote}</p>
              <footer className={style.HeroBlock__cite}>{cite}</footer>
            </blockquote>
            }
          </div>
        </Wrapper>
        </article>
      )}
    </>
  )
}

export default HeroBlock
