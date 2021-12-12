import React, { useRef, useState } from 'react'

import style from './index.module.css'

const Collapse = ({ title, children }) => {
  const [active, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const ref = useRef(null)

  const toggleCollapse = () => {
    setActiveState(active === '' ? style['Collapse--active'] : '')
    setHeightState(
      active === style['Collapse--active']
        ? '0px'
        : `${ref.current.scrollHeight}px`
    )
  }
  return (
    <div className={style.Collapse}>
      <article>
        <button
          className={style.Collapse__button + ` ${active}`}
          onClick={toggleCollapse}
        >
          <span>{title}</span>
          <span className={style.Collapse__icon + ` ${active}`}></span>
        </button>
        <div
          className={style.Collapse__content}
          ref={ref}
          style={{ maxHeight: `${setHeight}` }}
        >
          <div className={style.Collapse__inner}>{children}</div>
        </div>
      </article>
    </div>
  )
}

export default Collapse
