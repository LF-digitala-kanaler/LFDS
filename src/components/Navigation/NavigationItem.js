import React from 'react';
import styles from './index.module.css';
import { Link, withPrefix } from 'gatsby';
import PropTypes from 'prop-types';

const NavigationItem = ({path, title, scrollPoition}) => {
    const isHomepage = path === withPrefix("/")
    
    return (
      <li className={styles.Navigation__item}>
        <Link state={{scroll:scrollPoition}}  partiallyActive={isHomepage ? false : true} to={`/${path}`} title={title} className={styles.Navigation__link} activeClassName={styles.is__active}>{title}</Link>
      </li>
    );
};

NavigationItem.propTypes = {
    title: PropTypes.string
};

export default NavigationItem;