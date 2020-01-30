import React from 'react';
import Card from '../Card';
import style from './index.module.css';

const CardGrid = ({list}) => {
   
  const cardItems = list.map((item, index) => {
      console.log(item)
      if(item.category != "null") {
        console.log(item)
        return(
          <div className={style.CardGrid__item} key={index}>
            <Card 
              grid={true}  
              title={item.category} 
              url={item.link[0].node.fields.contentType.replace(/\/$/, "")} 
              image={item.link[0].node.frontmatter.previewImage}  
            />
          </div>
        )
      }
      else {
        
       return item.link.map(items => {
          return(
            <div className={style.CardGrid__item} key={items.node.id}>
              <Card 
                grid={true}  
                title={items.node.frontmatter.title} 
                url={items.node.fields.slug.replace(/\/$/, "")} 
                image={items.node.frontmatter.previewImage}  
              />
            </div>
          )
        })
      }
      
  });
  
  return (
    <div className={style.CardGrid}>{cardItems}</div>
  )
}


export default CardGrid


