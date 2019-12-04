import React, { useState }  from 'react';
import MenuItem from './MenuItem';
import style from './index.module.css';
import { Location } from '@reach/router';
import MenuToggle from '../MenuToggle';
import cx from 'classnames'




const Menu = ({items}) => {

  const [isOpen, setOpen] = useState(false);
  

  const handleOnClick = () => {
    setOpen(!isOpen)
    
  }

  const handleOverlayClick = () => {
    setOpen(false)
  }

  const renderMenuItems = (nav, loc) =>
    nav.map((item, index) => {
      
      return (
        <MenuItem 
          item={item}
          key={index}
          className={style.Menu__item}
          location={loc}
          />
      );
    });
   
    const handleMediaQueryChange = (matches) => {
      console.log(matches)
    }
   
    

    return (
      <React.Fragment>
        
          <MenuToggle isOpen={isOpen} onClick={handleOnClick} />
          <div onClick={handleOverlayClick} className={cx(style.Menu__overlay, (isOpen ? style['Menu__overlay--isVisible'] : '' ))} />
          <Location>
            {({ location }) => {
              return (
              <nav  className={cx(style.Menu, (isOpen ? style['Menu--isOpen'] : '' ))}>
                <ul className={style.Menu__list}>
                  {renderMenuItems(items, location)}
                </ul>
              </nav>
              )
          }}
        </Location>
      
      </React.Fragment>
    );
  
}

export default Menu;