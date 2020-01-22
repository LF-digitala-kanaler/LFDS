import React, {useLayoutEffect, useRef} from 'react';
import {useScroll} from 'react-use';
import navigation from '../../data/navigation';
import NavigationItem from './NavigationItem.js';
import styles from './index.module.css';
import { globalHistory } from "@reach/router"
const Navigation = () => {

  useLayoutEffect(() => {
      if(globalHistory.location.state !== null) {
        const scrollX = globalHistory.location.state.scroll; // get Scroll position from active link
        scrollRef.current.scrollLeft = scrollX;
      }
  }, []);


  // Get scroll position
  const scrollRef = useRef(null);
  const {x} = useScroll(scrollRef);


  const renderNavigationItems = (navigation) =>
    Object.keys(navigation).map(item => {
      return (
        <NavigationItem 
          key={item}
          path={navigation[item].href}
          title={navigation[item].title}
          scrollPoition={x}
          />
      );
   });

  const navigationItems = renderNavigationItems(navigation);
    

    return (
      <nav className={styles.Navigation}>
        <ul className={styles.Navigation__list} ref={scrollRef} >
          {navigationItems}
        </ul>
      </nav>
    );
}
export default  Navigation;
