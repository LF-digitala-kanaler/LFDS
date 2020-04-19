import React from "react"
import style from './index.module.css';

const Button = ({href, text}) => {
  
  return (
    <a className={style.Button} href={href}>{text}</a>
  )
};

export default Button;


