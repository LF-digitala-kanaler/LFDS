import React, { useLayoutEffect, useRef } from 'react'

import NavigationItem from './NavigationItem.js'
import { globalHistory } from '@reach/router'
import navigation from '../../data/navigation'
import style from './index.module.css'
import { useScroll } from 'react-use'

const Navigation = () => {
  useLayoutEffect(() => {
    if (globalHistory.location.state !== null) {
      const scrollX = globalHistory.location.state.scroll // get Scroll position from active link
      scrollRef.current.scrollLeft = scrollX
    }
  }, [])

  // Get scroll position
  const scrollRef = useRef(null)
  const { x } = useScroll(scrollRef)

  const renderNavigationItems = (navigation) =>
    Object.keys(navigation).map((item) => {
      return (
        <NavigationItem
          key={item}
          path={navigation[item].href}
          title={navigation[item].title}
          scrollPoition={x}
        />
      )
    })

  const navigationItems = renderNavigationItems(navigation)

  return (
    <nav className={style.Navigation}>
      <ul className={style.Navigation__list} ref={scrollRef}>
        {navigationItems}
      </ul>
    </nav>
  )
}
export default Navigation
