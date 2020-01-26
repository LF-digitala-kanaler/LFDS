import React from 'react';
import Card from '../Card';
import style from './index.module.css';

const CardGrid = ({list}) => {

  const cardItems = list.map((item) => 
    
    <div className={style.CardGrid__item} key={item.frontmatter.title}>
      <Card 
        grid={true}  
        title={item.frontmatter.title} 
        url={item.fields.slug.replace(/\/$/, "")} 
        image={item.frontmatter.previewImage}  
      />
    </div>
  );
  return (
    <div className={style.CardGrid}>{cardItems}</div>
  )
}


export default CardGrid


