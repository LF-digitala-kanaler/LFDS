import { Link } from 'gatsby'
import React from 'react'
import style from './index.module.css'

const isRelativeUrl = require(`is-relative-url`)

const LinkList = ({ items, customCss }) => {
  const links = items.map((item) => {
    return isRelativeUrl(item.url) ? (
      <li key={item.url} className={style.LinkList__item}>
        <Link className={style.LinkList__link} to={item.url}>
          {item.text}
        </Link>
      </li>
    ) : (
      <li key={item.url} className={style.LinkList__item}>
        <a
          rel="noopener noreferrer"
          className={style.LinkList__link}
          href={item.url}
          target="_blank"
        >
          {item.text}
        </a>
      </li>
    )
  })
  return (
    <>
      <nav style={customCss} className={style.LinkList}>
        <ul className={style.LinkList__list}>{links}</ul>
      </nav>
    </>
  )
}

export default LinkList
