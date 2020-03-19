import React from 'react';
import style from './index.module.css'
import { Link } from 'gatsby';


const Shortcut = ({text, path, icon, title}) => {
  

  return (
    <article className={style.Shortcut}>
      <Link to={path} title={title} className={style.Shortcut__link}>
        <img className={style.Shortcut__icon} src={icon} alt="" />
        <strong className={style.Shortcut__title}>{title}</strong>
        <p className={style.Shortcut__text}>{text}</p>
      </Link>
    </article>
  );
}


export default Shortcut