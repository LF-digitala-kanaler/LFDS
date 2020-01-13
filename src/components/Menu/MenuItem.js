import React, { useState, useEffect }  from 'react';
import style from './index.module.css';
import MenuLink from './MenuLink';
import classNames from 'classnames/bind';

let cx = classNames.bind(style);
  
const MenuItem = ({item, location}) => {
  const [open, setOpen] = useState(false);  
  useEffect(() => {
    const url = location.pathname.split('/');
    
    item.childLink.filter(function(active){
     
      if(active.node.fields.slug.match(location.pathname) && url.length > 4) {
        setOpen(true)
      }
    })

  }, []);

  
  
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
        <li className={style.Menu__item} key={item.node.id}><MenuLink title={item.node.frontmatter.title} path={item.node.fields.slug} /></li>
      );
    });
  };  

  return( 
    <li key={item.childLink[0].node.id} className={className} >
      <MenuLink parent path={item.childLink[0].node.fields.contentType} title={item.parentLink.replace(/-/g, ' ')} collapse={toggleSubMenu} />
      <ul className={style.Menu__sub} >
        {renderSubMenuItems(item.childLink)}
      </ul>
    </li>
  )

}

export default MenuItem;
