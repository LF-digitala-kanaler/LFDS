import React, { useState } from 'react'
import style from './index.module.css'
import cx from 'classnames'


const Filter = ({items, onChildClick}) => {

  const [active, setActive] = useState(0)
  
  const handleClick = (index, item) => {
    setActive(index)
    onChildClick(index)
  }
  
  const listItems = items.map((item, index) => {
    return (
      <dd className={style.Filter__item} key={index}>
        <button 
          className={style.Filter__button}
          onClick={() => handleClick(index, item)}
          className={cx(
            style.Filter__button,
            active === index
              ? style['Filter__button--isActive']
              : ''
          )}
          >{item}

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

