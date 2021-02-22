import React from 'react'
import style from './index.module.css'

const Tags = (items) => {
  
  
  const listItems = [...items].map((item, index) => <li className={style.Tags_item} key={index}>{item}</li>);
  
  return (
    <nav className={style.Tags}>
      <ul className={style.Tags_list}>
        {listItems}
    </ul>
    </nav>
  )
}

export default Tags

