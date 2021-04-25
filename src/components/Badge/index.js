import * as style from './index.module.css'

import cx from 'classnames'
import React from 'react'

const Badge = ({ status }) => {
  return (
    <span className={cx(style.Badge, style['Badge--' + status.toLowerCase()])}>
      {status}
    </span>
  )
}

export default Badge
