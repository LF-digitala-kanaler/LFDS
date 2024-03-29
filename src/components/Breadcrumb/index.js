import { Link } from 'gatsby'
import React from 'react'
import { capitalizeFirstLetter } from '../../utils/CapitalizeFirstLetter'
import style from './index.module.css'

const parentDirectory = (url) => {
  return url.substring(0, url.lastIndexOf('/'))
}

const Breadcrumb = ({ location }) => {
  return (
    <div className={style.Breadcrumb}>
      <li className={style.Breadcrumb__item}>
        <Link
          className={style.Breadcrumb__link}
          to={
            location.location.pathname.includes('component')
              ? '/' + location.location.pathname.split('/')[1]
              : '/' + location.location.pathname.split('/')[1]
          }
        >
          {capitalizeFirstLetter(
            location.location.pathname.split('/')[1].replace('-', ' ')
          )}
        </Link>
      </li>

      {location.category && (
        <li className={style.Breadcrumb__item}>
          <Link
            className={style.Breadcrumb__link}
            to={parentDirectory(location.location.pathname)}
          >
            {location.category}
          </Link>
        </li>
      )}
      <li className={style.Breadcrumb__item}>
        <Link
          className={style.Breadcrumb__link}
          to={location.location.pathname}
        >
          {location.title}
        </Link>
      </li>
    </div>
  )
}

export default Breadcrumb
