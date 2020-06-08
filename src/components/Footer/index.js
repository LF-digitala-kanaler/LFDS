import React from "react"
import style from './index.module.css';
import { Link } from 'gatsby';




const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.Footer__container}>
        <Link to='/' className={style.Footer__logo}>
          <svg className={style.Footer__image} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#005AA0" d="M14.275 0v11.103h14.54v28.814h11.102V0z"/><path fill="#005AA0" d="M0 0v39.917h25.642V28.815h-14.54V0z"/><path fill="#E30613" d="M14.275 25.642h11.367V14.275H14.275z"/></g></svg>
          <span className={style.Footer__text}>Länsförsäkringar Design</span>
        </Link>
      </div>
    </footer>
  )
};

export default Footer;


