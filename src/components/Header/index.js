import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './index.module.css'
import Navigation from '../Navigation';
import Menu from '../Menu';
import Logotype from '../Logotype'
import Breadcrumb from '../Breadcrumb'
import Search from '../Search';
import cx from 'classnames';

// import ToggleSwitch from '../ToggleSwitch';

const Header = ({ title, breadcrumb, menu }) => {
  
  return (
    <header className={style.Header}>
      <div className={style.Header__container}>
        <Link to='/' className={cx(style.Header__title,(menu ? style['Header__title--offset'] : " "))}>
          <span className={style.Header__headline}>{title}</span>
          <Logotype />
          
        </Link>
        
        <div className={style.Header__wrapper}>
          <Navigation />
        </div> 
      </div>
      <div className={cx(style.Header__container, style['Header__container--last'])}>
      
        {menu  &&  <Menu /> }
        <div className={cx(style.Header__wrapper, style['Header__wrapper--last'])}>
          {breadcrumb  && <Breadcrumb  location={breadcrumb}  /> }
        <Search />
        </div> 
      </div>
    </header>
    )
  
  }


Header.propTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
}

Header.defaultProps = {
  title: '',
  headline: '',
}

export default Header


