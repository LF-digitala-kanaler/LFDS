import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import style from './index.module.css'

export const Heading = ({ text, tag, align, children, id }) => {
  const Htag = `h${tag}`

  return (
    <Htag
      id={id}
      className={cx(
        style.Heading,
        style['Heading--' + tag],
        style['Heading--' + align]
      )}
    >

      {text}
      {children}
    </Htag>
  )
}

Heading.prototype = {
  text: PropTypes.string.isRequired,
}

export default Heading
