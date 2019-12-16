import React from 'react';
import { Link } from 'gatsby';
import Image from '../Image';
import style from './index.module.css';




const Card = ({title, url, image, description}) => {
  
  
   
  return (
    <Link className={style.Card} to={url} >
      <article className={style.Card__wrapper}>
        <div className={style.Card__image}>
          {
            image ?
              <Image imageInfo={ {image: image}} />
            :
            <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path stroke-width="2" stroke="#e5e5e5" fill="#ffffff" d="M0 0h239.625v119.927H0z"/><path fill="#DCDDDE" d="M18.433 41.231h202.759v3.574H18.433zM18.433 51.954h202.759v3.574H18.433zM18.433 62.677h202.759v3.574H18.433zM18.433 73.4h55.298v3.574H18.433z"/><text font-family="Arial-BoldMT, Arial" font-size="40" font-weight="bold" fill="#222"><tspan x="155.912" y="65.362">?</tspan></text></g></svg>

          }
          
        </div>
        <div className={style.Card__body}> 
          <h2 className={style.Card__title}>{title}</h2>
          <p className={style.Card__description}>{description}</p>
        </div>
      </article>
     
      
     
    </Link>
  );
}
  



export default Card