import * as style from './index.module.css'

import React from 'react'

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
