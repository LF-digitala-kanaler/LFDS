import React from 'react';
import { Link } from 'gatsby';
import style from './index.module.css';
import cx from 'classnames'




const Card = ({title, url, image, description, grid}) => {
  
  
   
  return (
    <Link className={style.Card} to={url} >
      <article className={cx(!grid ? style.Card__wrapper : '' )}>
        <div className={style.Card__image}>
          {
            image ?
              <img src={image} alt=" " />
              
            :
            <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path strokeWidth="2" stroke="#e5e5e5" fill="#ffffff" d="M0 0h239.625v119.927H0z"/><path fill="#DCDDDE" d="M18.433 41.231h202.759v3.574H18.433zM18.433 51.954h202.759v3.574H18.433zM18.433 62.677h202.759v3.574H18.433zM18.433 73.4h55.298v3.574H18.433z"/><text fontFamily="Arial-BoldMT, Arial" fontSize="40" fontWeight="bold" fill="#222"><tspan x="155.912" y="65.362">?</tspan></text></g></svg>

          }
          
        </div>
        <div className={style.Card__body}> 
          <h2 className={cx(style.Card__title, (grid ? style['Card__title--small'] : '' ))}>{title}</h2>
          <p className={style.Card__description}>{description}</p>
        </div>
      </article>
     
      
     
    </Link>
  );
}
  



export default Card