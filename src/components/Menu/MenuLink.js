import * as style from './index.module.css'

import { Link } from 'gatsby'
import React from 'react'

const MenuLink = ({ path, title, parent, collapse }) => {
  return (
    <>
      <Link
        activeClassName={style['Menu__link--active']}
        className={style.Menu__link}
        to={`${path}`}
      >
        {title}
      </Link>
      {parent && (
        <button
          aria-label="Open Child Menu"
          className={style.Menu__trigger}
          onClick={collapse}
        ></button>
      )}
    </>
  )
}

export default MenuLink
