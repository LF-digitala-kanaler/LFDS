
import React from "react"
import style from './index.module.css'

const HeroBlock = ({ background, content }) => {
  
  const backgroundColor = {
    'backgroundColor': background
  }

  return (
    <article className={style.HeroBlock} style={backgroundColor}>
      <div className={style.HeroBlock__container}>
        
        <p>{content}</p>
      </div>
    </article>
    )
  
  }

export default HeroBlock


