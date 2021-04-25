import * as style from './index.module.css'

import React, { useState } from 'react'

import cx from 'classnames'

const ComponentNavigation = ({ onChildClick, navigation }) => {


  const [active, setActive] = useState(navigation[0].example[0].node.id)
  const handleClick = (variants, active) => {
    setActive(active)
    onChildClick(variants)
  }


  const listItem = navigation.map((item) => {

    return item.example.map((items) => (

      <li key={items.node.id}>

        <button
          onClick={() => handleClick(items.node, items.node.id)}
          className={cx(
            style.ComponentNavigation__button,
            active === items.node.id
              ? style['ComponentNavigation__button--isActive']
              : ''
          )}
        >
          {item.name}
        </button>
      </li>
    ))
  })

  return (
    <nav className={style.ComponentNavigation}>
      <ul className={style.ComponentNavigation__list}>{listItem}</ul>
    </nav>
  )
}

export default ComponentNavigation
