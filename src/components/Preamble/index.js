import * as style from './index.module.css'

import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const Preamble = ({ text, tag, align }) => {
  let Tag = tag

  return (
    <Tag className={cx(style.Preamble, style['Preamble--' + align])}>
      {text}
    </Tag>
  )
}

Preamble.prototype = {
  text: PropTypes.string.isRequired,
}

export default Preamble
