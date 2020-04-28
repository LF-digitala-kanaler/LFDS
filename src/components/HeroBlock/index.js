
import React from "react"
import style from './index.module.css'
import Wrapper from '../Wrapper';
import cx from 'classnames'

const HeroBlock = ({ background, quote, cite, image }) => {
  
  
  const backgroundStyle = {
    backgroundColor: background,
    backgroundImage: `url(${image.publicURL})`,
    backgroundSize: 'cover'
  }
  return (
    <article className={cx(style.HeroBlock, image.publicURL.length ? style.HeroBlock__image : '')} style={backgroundStyle}>
      {!image.publicURL.length &&
      <Wrapper tag="div" menu={true}  narrow>
        <div className={style.HeroBlock__container}>
          <blockquote className={style.HeroBlock__quote}>
            <p className={style.HeroBlock__text}>{quote}</p>
            <footer className={style.HeroBlock__cite}>{cite}</footer>
          </blockquote>
        </div>
       </Wrapper>
       }
    </article>
    )
  
  }

export default HeroBlock


