import * as style from './index.module.css'

import React from 'react'
import cx from 'classnames'

const Badge = ({ status }) => {
  return (
    <span className={cx(style.Badge, style['Badge--' + status.toLowerCase()])}>
      {status}
    </span>
  )
}

export default Badge
