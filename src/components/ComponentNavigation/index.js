import React, {useState} from 'react';
import style from './index.module.css';
import cx from 'classnames'


const ComponentNavigation = ({variants, onChildClick}) => {
  const [active, setActive] = useState(variants[0].node.id);
  
  const handleClick = (variants, active) => {
    setActive(active)
    onChildClick(variants)
  }
  const camel2title = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase());

  const listItem = variants.map((item) =>
      <li className={style.ComponentNavigation_item} key={item.node.id} >
        <button
          onClick={() => handleClick(item.node.content, item.node.id)} 
          className={cx(style.ComponentNavigation__button, (active === item.node.id ? style['ComponentNavigation__button--isActive'] : '' ))}>{camel2title(item.node.name)}
        </button>
      </li>
  );
  return(
    <nav className={style.ComponentNavigation}>
      <ul className={style.ComponentNavigation__list}>{listItem}</ul>
    </nav>
  );
  

}

export default ComponentNavigation