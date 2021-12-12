import React, { useState } from 'react'

import cx from 'classnames'
import style from './index.module.css'

const Filter = ({ items, onChildClick }) => {
  const [active, setActive] = useState(0)

  const handleClick = (index) => {
    setActive(index)
    onChildClick(index)
  }

  const listItems = items.map((item, index) => {
    return (
      <dd className={style.Filter__item} key={index}>
        <button
          onClick={() => handleClick(index, item)}
          className={cx(
            style.Filter__button,
            active === index ? style['Filter__button--isActive'] : ''
          )}
        >
          {item}
        </button>
      </dd>
    )
  })

  return (
    <dl className={style.Filter}>
      <dt className={style.Filter__title}></dt>
      {listItems}
    </dl>
  )
}

export default Filter
