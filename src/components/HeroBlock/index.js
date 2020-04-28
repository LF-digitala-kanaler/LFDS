
import React from "react"
import style from './index.module.css'
import Wrapper from '../Wrapper';
const HeroBlock = ({ background, quote, cite, image }) => {
  
  
  const backgroundStyle = {
    backgroundColor: background,
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  }
  return (
    <article className={style.HeroBlock} style={backgroundStyle}>
      <Wrapper tag="div" menu={true}  narrow>
        <div className={style.HeroBlock__container}>
          <blockquote className={style.HeroBlock__quote}>
            <p className={style.HeroBlock__text}>{quote}</p>
            <footer className={style.HeroBlock__cite}>{cite}</footer>
          </blockquote>
        </div>
       </Wrapper>
    </article>
    )
  
  }

export default HeroBlock


