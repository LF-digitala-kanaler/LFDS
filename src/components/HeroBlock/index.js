
import React from "react"
import style from './index.module.css'


// import ToggleSwitch from '../ToggleSwitch';

const HeroBlock = ({ color, content }) => {
  
  return (
    <article className={style.HeroBlock} >
      <div className={style.HeroBlock__container}>
        <p>{color}</p>
        <p>{content}</p>
      </div>
    </article>
    )
  
  }

export default HeroBlock


