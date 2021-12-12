import { Link, withPrefix } from 'gatsby'

import PropTypes from 'prop-types'
import React from 'react'
import style from './index.module.css'

const NavigationItem = ({ path, title, scrollPoition }) => {
  const isHomepage = path === withPrefix('/')
  return (
    <li className={style.Navigation__item}>
      <Link
        state={{ scroll: scrollPoition }}
        partiallyActive={isHomepage ? false : true}
        to={`/${path}`}
        title={title}
        className={style.Navigation__link}
        activeClassName={style.is__active}
      >
        {title}
      </Link>
    </li>
  )
}

NavigationItem.propTypes = {
  title: PropTypes.string,
}

export default NavigationItem
