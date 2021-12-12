import React from 'react'
import cx from 'classnames'
import style from './index.module.css'

const Badge = ({ status }) => {
  return (
    <span className={cx(style.Badge, style['Badge--' + status.toLowerCase()])}>
      {status}
    </span>
  )
}

export default Badge
