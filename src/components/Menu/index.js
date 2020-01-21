import React, { useState }  from 'react';
import MenuItem from './MenuItem';
import style from './index.module.css';
import { Location } from '@reach/router';
import MenuToggle from '../MenuToggle';
import cx from 'classnames'
import {useLockBodyScroll, useToggle} from 'react-use';
import { createBreakpoint } from "react-use";
import AnimationContainer from '../../utils/AnimationCointainer';
import { useStaticQuery, graphql } from "gatsby"
import _ from 'lodash';
import { globalHistory } from "@reach/router"



const Menu = ({currentDirectory}) => {

  
  const data = useStaticQuery(graphql`
      query Menu {
        allPages: allMarkdownRemark(
          filter: { fileAbsolutePath: {regex : "/^((?!index).)*$/"} },
        ){ 
          edges {
            node {
              id
              frontmatter {
                title
                category
              }
              fields {
                slug
                contentType
                parent
              }
            }
          }
        }
      }
    `)
  
  const location = globalHistory.location.pathname
  const useBreakpoint = createBreakpoint({ M: 1024, S: 768});

  if(typeof window !== `undefined`) {
    currentDirectory = location.split('/');
    currentDirectory = currentDirectory.filter(item => item);
    currentDirectory  = currentDirectory.slice(0, 1).join('/');
    
  }
  
  
  
  const navigationItems = {
    items: data.allPages.hasOwnProperty('edges')
      ? data.allPages.edges.filter(items => (items.node.fields.contentType.includes(currentDirectory)))
      : false
  }

  const navigationStructure = _(navigationItems.items)
  
  
  .chain()
  .groupBy('node.frontmatter.category')
  .map((value, key) => ({ parentLink: key,  childLink: value}))
  .value()
  const navigationStructureSorted = _.orderBy(navigationStructure, [item => item.parentLink.toLowerCase()], ['asc']);
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
          <div role="button" tabIndex={0} onClick={handleOverlayClick} onKeyDown={handleOverlayClick} className={cx(style.Menu__overlay, (isOpen ? style['Menu__overlay--isVisible'] : '' ))} />
          
          <Location>
            {({ location }) => {
              
              return ( 
                <React.Fragment>
                 { breakpoint === 'M'  ? (
                <AnimationContainer show={isOpenDesktop}>
                <nav className={cx(style.Menu, (isOpenDesktop ? style['Menu--isOpen'] : '' ))}>
                  <ul className={style.Menu__list}>
                    {renderMenuItems(navigationStructureSorted, location)}
                  </ul>
                </nav>
                </AnimationContainer>
                ) : (
                  
                    <nav className={cx(style.Menu, (isOpen ? style['Menu--isOpen'] : '' ))}>
                      <ul className={style.Menu__list}>
                        {renderMenuItems(navigationStructureSorted, location)}
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