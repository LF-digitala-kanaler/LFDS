import React from 'react';
import Card from '../Card';
import style from './index.module.css';



const CardGrid = ({list}) => {
  
  const cardItems = list.map((item, index) => {
      if(item.category !== "null") {
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
         console.log(items)
          return(
            <div className={style.CardGrid__item} key={items.node.id}>
              <Card 
                grid={true}  
                title={items.node.frontmatter.title} 
                url={items.node.fields.slug.replace(/\/$/, "")} 
                image={items.node.frontmatter.previewImage}
                lang={items.node.frontmatter.lang}
              />
            </div>
          )
        })
      }
      
  });
  
  return (

    <section className={style.CardGrid}>
      <div className={style.CardGrid__grid}>{cardItems}</div>
    </section>
  )
}


export default CardGrid


