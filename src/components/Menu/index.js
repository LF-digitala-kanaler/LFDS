import React, { useState, useContext }  from 'react';
import MenuItem from './MenuItem';
import style from './index.module.css';
import { Location } from '@reach/router';
import MenuToggle from '../MenuToggle';
import cx from 'classnames'
import { createBreakpoint } from "react-use";
import AnimationContainer from '../../utils/AnimationCointainer';
import { useStaticQuery, graphql } from "gatsby"
import _ from 'lodash';
import { globalHistory } from "@reach/router"
import { GlobalDispatchContext,GlobalStateContext } from "../../context/GlobalContextProvider"


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
                priority
              }
              fields {
                slug
                contentType
              }
            }
          }
        }
      }
    `)
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

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
  
  const navigationStructureSorted = _.orderBy(navigationStructure, [(item) => {
    const nestedObj = _.get(item, 'childLink');
    item['childLink'] = _.orderBy(nestedObj,['node.frontmatter.priority', 'node.frontmatter.title'],['asc', 'asc']);
      return [item.parentLink, item['childLink']];
    }], 'asc', 'asc');

  const breakpoint = useBreakpoint();
  const [isOpen, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!isOpen)
    document.body.style.overflow = 'hidden';
     
  }
  const handleOnClickDesktop = () => {
    dispatch({ type: "TOGGLE_SIDENAV" })
  }
  
  const handleOverlayClick = () => {
    setOpen(false)
    document.body.style.overflow = 'unset';
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
              <AnimationContainer show={state.isMenuOpenDesktop}>
                <MenuToggle isOpen={state.isMenuOpenDesktop} onClick={handleOnClickDesktop} />
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
                <AnimationContainer show={state.isMenuOpenDesktop}>
                <nav className={cx(style.Menu, (state.isMenuOpenDesktop ? style['Menu--isOpen'] : '' ))}>
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