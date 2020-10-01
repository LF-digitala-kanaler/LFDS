import React, { useState } from 'react'
import style from './index.module.css'
import cx from 'classnames'

const ComponentNavigation = ({ onChildClick, navigation }) => {
  const [active, setActive] = useState(navigation[0].example[0].node.id)
  const handleClick = (variants, active) => {
    setActive(active)
    onChildClick(variants)
  }
  const camel2title = (camelCase) =>
    camelCase
      .replace(/([A-Z])/g, (match) => ` ${match}`)
      .replace(/^./, (match) => match.toUpperCase())

  const listItem = navigation.map((item) => {
    return item.example.map((items) => (
      <li className={style.ComponentNavigation_item} key={items.node.id}>
        <button
          onClick={() => handleClick(items.node, items.node.id)}
          className={cx(
            style.ComponentNavigation__button,
            active === items.node.id
              ? style['ComponentNavigation__button--isActive']
              : ''
          )}
        >
          {camel2title(items.node.name)}
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
