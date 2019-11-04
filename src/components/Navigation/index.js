import React from 'react';

import navigation from '../../data/navigation.json';
import NavigationItem from './NavigationItem.js';
import styles from './index.module.css';
export default class Navigation extends React.Component {
  
  renderNavigationItems = (navigation) =>
    Object.keys(navigation).map(item => {
      return (
        <NavigationItem 
          item={navigation[item]}
          itemSlug={item}
          key={item}
          path={navigation[item].href}
          title={navigation[item].title}
          />
      );
    });

  render() {
    const navigationItems = this.renderNavigationItems(navigation);
    
    return (
      <nav className={styles.Navigation}>
        <ul className={styles.Navigation__list}>
          {navigationItems}
        </ul>
      </nav>
    );
  }
}
