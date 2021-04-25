import * as style from './index.module.css'

import React from 'react'

const Button = ({ href, text }) => {
  return (
    <a className={style.Button} href={href}>
      {text}
    </a>
  )
}

export default Button
