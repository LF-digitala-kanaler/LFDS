import React, { useState }  from 'react';
import MenuItem from './MenuItem';
import style from './index.module.css';
import { Location } from '@reach/router';
import MenuToggle from '../MenuToggle';
import cx from 'classnames'
import {useLockBodyScroll, useToggle} from 'react-use';
import { createBreakpoint } from "react-use";
import AnimationContainer from '../../utils/AnimationCointainer';



const useBreakpoint = createBreakpoint({ M: 982, S:768});


const Menu = ({items}) => {
  const breakpoint = useBreakpoint();
  
  const [isOpen, setOpen] = useState(false);
  const [isOpenDesktop, setOpenDesktop] = useState(true);
  const [locked, toggleLocked] = useToggle(false)
  
  useLockBodyScroll(locked);
  
  

  const handleOnClick = () => {
    setOpen(!isOpen)
    toggleLocked()
     
  }
  const handleOnClickDesktop = () => {
    setOpenDesktop(!isOpenDesktop)
  }
  
  const handleOverlayClick = () => {
    setOpen(false)
    toggleLocked()
     
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
    return (
      <React.Fragment>
          
          {
            breakpoint === 'M'  ? (
              <AnimationContainer show={isOpenDesktop}>
                <MenuToggle isOpen={isOpenDesktop} onClick={handleOnClickDesktop} />
              </AnimationContainer>
            ) : (
              <MenuToggle isOpen={isOpen} onClick={handleOnClick} />
            )
            
          } 
          <div onClick={handleOverlayClick} className={cx(style.Menu__overlay, (isOpen ? style['Menu__overlay--isVisible'] : '' ))} />
          
          <Location>
            {({ location }) => {
              
              return ( 
                <React.Fragment>
                 { breakpoint === 'M'  ? (
                <AnimationContainer show={isOpenDesktop}>
                <nav  className={cx(style.Menu, (isOpenDesktop ? style['Menu--isOpen'] : '' ))}>
                  <ul className={style.Menu__list}>
                    {renderMenuItems(items, location)}
                  </ul>
                </nav>
                </AnimationContainer>
                ) : (
                  
                    <nav className={cx(style.Menu, (isOpen ? style['Menu--isOpen'] : '' ))}>
                      <ul className={style.Menu__list}>
                        {renderMenuItems(items, location)}
                      </ul>
                    </nav>
                  
                ) 
                } 
                </React.Fragment>
              )
          }}
        </Location>
      
      </React.Fragment>
    );
  
}

export default Menu;
