import * as style from './index.module.css'

import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

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
