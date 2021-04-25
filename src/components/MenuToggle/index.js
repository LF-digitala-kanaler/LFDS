import * as style from './index.module.css'

import cx from 'classnames'
import React from 'react'

export const MenuToggle = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        style.MenuToggle,
        isOpen ? style['MenuToggle--isActive'] : ''
      )}
    >
      <div className={style.MenuToggle__inner}>
        <span className={style.MenuToggle__path}></span>
        <span className={style.MenuToggle__path}></span>
        <span className={style.MenuToggle__path}></span>
        <span className={style.MenuToggle__path}></span>
      </div>
      <span className={style.MenuToggle__text}>Meny</span>
    </button>
  )
}

export default MenuToggle
