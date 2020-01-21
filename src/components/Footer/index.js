import React from "react"
import style from './index.module.css';
import { Link } from 'gatsby';
import Logotype from "../Logotype";



const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.Footer__container}>
        <Link to='/' className={style.Footer__logo}>
          <Logotype /> 
        </Link>
      </div>
    </footer>
  )
};

export default Footer;


