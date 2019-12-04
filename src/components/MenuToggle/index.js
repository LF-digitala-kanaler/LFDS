import React from 'react';
import style from './index.module.css';
import cx from 'classnames'



export const MenuToggle = ({onClick,isOpen}) => {
  return (
    <button onClick={onClick} className={cx(style.MenuToggle, (isOpen ? style['MenuToggle--isActive'] : '' ))} >
      <span className={style.MenuToggle__path}></span>
      <span className={style.MenuToggle__text}>Meny</span>
    </button>
  );
}



export default MenuToggle
