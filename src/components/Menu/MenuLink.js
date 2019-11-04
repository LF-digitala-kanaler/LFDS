
import React from 'react';
import style from './index.module.css';
import { Link } from 'gatsby';
import cx from 'classnames'

const MenuLink = ({ path, title ,parent, collapse}) => (
  <>
  <Link partiallyActive={true} to={path} className={cx(style.Menu__link, parent ? style['Menu__link--parent'] : '')}  activeClassName={style['Menu__link--active']}>
    {title}
  </Link>
  { parent && 
    <button className={style.Menu__trigger} onClick={collapse}></button>
  }
  </>
)

export default MenuLink;