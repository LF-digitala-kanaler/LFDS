import React from 'react';
import style from './index.module.css';
import cx from 'classnames'

const Badge = ({status}) => {
  return (
  <span className={cx(style.Badge, style['Badge--' + status.toLowerCase()])} >
    {status}
  </span>
  )
}

export default Badge