import React, { useState, useLayoutEffect}  from 'react';
import style from './index.module.css';
import MenuLink from './MenuLink';
import classNames from 'classnames/bind';

let cx = classNames.bind(style);
  
const MenuItem = ({item, location}) => {
  const [open, setOpen] = useState(false);  
  useLayoutEffect(() => {
    let url = location.pathname.replace(/\/$/, "");
        url = location.pathname.split('/');
        url.pop()
    
    item.childLink.filter((active, ) => {
      if(active.node.fields.slug.match(location.pathname) && url.length >= 3) {
        setOpen(true)
      } 
      return null
    },)

  }, [item, location]);

  

  const className = cx({
    Menu__item: true,
    'Menu__item--active': open,
    '' : !open
  });

  const toggleSubMenu = () => {
    setOpen(!open)
  };
  
  const renderSubMenuItems = (items) => {
    return items.map((item) => {
      return (
        <li className={style.Menu__item} key={item.node.id}><MenuLink title={item.node.frontmatter.title} path={'/'+item.node.fields.slug} /></li>
      );
    });
  };  
  
  const hasCategory = !(item.parentLink === 'null');
  return( 
    hasCategory ? (
      <li key={item.childLink[0].node.id} className={className} >
        <MenuLink parent path={item.childLink[0].node.fields.contentType} title={item.parentLink.replace(/-/g, ' ')} collapse={toggleSubMenu} />
        <ul className={style.Menu__sub} >
          {renderSubMenuItems(item.childLink)}
        </ul>
      </li>
     ) : (
      <>{renderSubMenuItems(item.childLink)}</>
  )
  )
}

export default MenuItem;


