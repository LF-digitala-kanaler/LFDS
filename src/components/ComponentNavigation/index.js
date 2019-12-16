import React, {useState} from 'react';
import style from './index.module.css';

const ComponentNavigation = ({variants, onChildClick}) => {
  const [active, setActive] = useState(false);
  
  const handleClick = (variants) => {
    onChildClick(variants)
  }

  const listItem = variants.map((item) =>
      <li className={style.ComponentNavigation_item} key={item.node.id} ><button onClick={() => handleClick(item.node.content)} className={style.ComponentNavigation__button}>{item.node.name}</button></li>
  );
  return(
    <nav className={style.ComponentNavigation}>
      <ul className={style.ComponentNavigation__list}>{listItem}</ul>
    </nav>
  );
  

}
  

  
    


export default ComponentNavigation