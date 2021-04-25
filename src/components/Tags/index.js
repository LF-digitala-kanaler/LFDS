import * as style from './index.module.css'

import React from 'react'

const Tags = (items) => {


  const listItems = [...items.items].map((item, index) => <li className={style.Tags__item} key={index}>{item}</li>);

  return (
    <div className={style.Tags}>
      <ul className={style.Tags__list}>
        {listItems}
      </ul>
    </div>
  )
}

export default Tags

