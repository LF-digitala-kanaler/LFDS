import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './index.module.css'
import Navigation from '../Navigation';

const Header = ({ title, headline }) => (
  <header className={style.Header}>
      <Link to='/' className={style.Header__title}>
          {title}
          <p className={style.Header__headline}>{headline}</p>
      </Link>
      <div className={style.Header__wrapper}>
          <Navigation />
      </div> 
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
}

Header.defaultProps = {
  title: '',
  headline: '',
}

export default Header
