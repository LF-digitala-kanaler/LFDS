import React, { useState }  from 'react';
import MenuItem from './MenuItem';
import style from './index.module.css';
import navigation from '../../data/navigation';
import { Location } from '@reach/router';
import MenuToggle from '../MenuToggle';
import cx from 'classnames'
import {useLockBodyScroll, useToggle} from 'react-use';
import { createBreakpoint } from "react-use";
import AnimationContainer from '../../utils/AnimationCointainer';
import { useStaticQuery, graphql } from "gatsby"
import _ from 'lodash';
import { globalHistory as history } from '@reach/router'


const useBreakpoint = createBreakpoint({ M: 982, S:768});


const Menu = ({}) => {
  const { location, navigate } = history
  const data = useStaticQuery(graphql`

    query Meny{
      allPages: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___title] }
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
              parent
            }
          }
        }
     
    }
   } 
  `)
  //Get all created components 

  // const na = data.allPages.edges.filter(category => {
  //   category.node.fields.slug.includes(location.pathname)
  //   return {  ...category.node}
  // }) 
  // const filterItems = (category, query) => {
  //   return category.node.fields.slug.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  // }
  // const test = filterItems(data.allPages.edges, location.pathname)
  //console.log('nav', test)
  const components = {
    categories: data.allPages.hasOwnProperty('edges')
      ? data.allPages.edges.map(category => {
         
         
            return {  ...category.node}
         
        })
      : false
  }
   // Sort and arrange them in categories 
  
  const componentNavigation = _(components.categories)
  
  .chain()
  .groupBy('frontmatter.category')
  .map((value, key) => ({ category: key , component: value}))
  .value()
  
  
  
  
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
                <nav className={cx(style.Menu, (isOpenDesktop ? style['Menu--isOpen'] : '' ))}>
                  <ul className={style.Menu__list}>
                    {renderMenuItems(componentNavigation, location)}
                  </ul>
                </nav>
                </AnimationContainer>
                ) : (
                  
                    <nav className={cx(style.Menu, (isOpen ? style['Menu--isOpen'] : '' ))}>
                      <ul className={style.Menu__list}>
                        {renderMenuItems(componentNavigation, location)}
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
