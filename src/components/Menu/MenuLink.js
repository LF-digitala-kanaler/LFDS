
import React from 'react';
import style from './index.module.css';
import { Link } from 'gatsby';
import cx from 'classnames'
import { Menu } from 'react-feather';




const MenuLink = ({ path, title ,parent, collapse}) => {

  

  return(
  <>
  <Link  activeClassName={style['Menu__link--active']} className={style.Menu__link}  to={path} >
    {title}
  </Link>
  { parent && 
    <button className={style.Menu__trigger} onClick={collapse}></button>
  }
  </>
  );
}

export default MenuLink;