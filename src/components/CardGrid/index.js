import React, {useContext} from 'react';
import Card from '../Card';
import style from './index.module.css';
import cx from 'classnames';
import {GlobalStateContext } from "../../context/GlobalContextProvider"

const CardGrid = ({list}) => {
  const state = useContext(GlobalStateContext)
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

    <section className={cx(style.CardGrid, (state.isMenuOpenDesktop ? style['CardGrid--push'] : " "))}>
      <div className={style.CardGrid__grid}>{cardItems}</div>
    </section>
  )
}


export default CardGrid


