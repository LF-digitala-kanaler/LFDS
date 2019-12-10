import React from 'react';
import { Link } from 'gatsby';
import Image from '../Image';
import style from './index.module.css';




const Card = ({title, url, image, description}) => {
  
  let placeholder = '/img/placeholder.svg';
   
  return (
    <Link className={style.Card} to={url} >
      <article className={style.Card__wrapper}>
        <div className={style.Card__image}>
          <Image imageInfo={ image ? {image: image} : {image: placeholder}} />
        </div>
        <div className={style.Card__body}> 
          <h2 className={style.Card__title}>{title}</h2>
          <p className={style.Card__text}>{description}</p>
        </div>
      </article>
     
      
     
    </Link>
  );
}
  



export default Card