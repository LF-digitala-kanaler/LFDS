import React from 'react';
import Card from '../Card';
import style from './index.module.css';

const CardGrid = ({list}) => {
  
  const cardItems = list.map((item) => 
    <div className={style.CardGrid__item} key={item.node.id}>
      <Card 
        grid={true}  
        title={item.node.frontmatter.category} 
        url={item.node.fields.slug.replace(/\/$/, "")} 
        image={item.node.frontmatter.previewImage}  
      />
    </div>
  );
  return (
    <div className={style.CardGrid}>{cardItems}</div>
  )
}


export default CardGrid


