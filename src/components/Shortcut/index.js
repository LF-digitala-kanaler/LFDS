import * as style from './index.module.css'

import cx from 'classnames'
import { Link } from 'gatsby'
import React from 'react'

const Shortcut = ({ text, path, icon, title, horizontal }) => {



  return (
    <article className={cx(style.Shortcut, horizontal ? style['Shortcut--horizontal'] : '')}>
      <Link to={path} title={title} className={style.Shortcut__link}>
        <div className={style.Shortcut__container}>
          <img className={style.Shortcut__icon} src={icon} alt="" />
        </div>
        <div className={style.Shortcut__body}>
          <strong className={style.Shortcut__title}>{title}</strong>
          <p className={style.Shortcut__text}>{text}</p>
        </div>
        {horizontal && <svg className={style.Shortcut__arrow} width="21" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M15.207.293L20.914 6l-5.707 5.707-1.414-1.414L17.085 7H0V5h17.085l-3.292-3.293L15.207.293z" fill="#222" fillRule="evenodd" /></svg>}
      </Link>
    </article>
  )
}

export default Shortcut

