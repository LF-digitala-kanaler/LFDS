import React from 'react'
import style from './index.module.css'

const ButtonList = ({ children }) => {
  return (
    <div className={style.ButtonList}>
      <ul className={style.ButtonList__list}>{children}</ul>
    </div>
  )
}
const ButtonListItem = ({ children }) => {
  return <li className={style.ButtonList__item}>{children}</li>
}

export { ButtonList, ButtonListItem }
