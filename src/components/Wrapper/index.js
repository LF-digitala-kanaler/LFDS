import React from 'react'
import style from './index.module.css'
import cx from 'classnames'

const Wrapper = ({ tag, menu, children, narrow, wide, tight, center }) => {
  let Tag = tag
  return (
    <Tag
      className={cx(
        style.Wrapper,
        menu ? style['Wrapper--push'] : '',
        narrow ? style['Wrapper--narrow'] : '',
        wide ? style['Wrapper--wide'] : '',
        tight ? style['Wrapper--tight'] : '',
        center ? style['Wrapper--center'] : ''
      )}
    >
      {children}
    </Tag>
  )
}

export default Wrapper
