import React from 'react';
import { Link } from 'gatsby';
import style from './index.module.css';
import cx from 'classnames'




const Card = ({title, url, image, description, grid, lang}) => {
  return (
    <Link className={cx(style.Card, (grid ? '' :  style['Card--list'] ))} to={`/${url}`} >
      <article className={cx(!grid ? style.Card__wrapper : '' )}>
        <div className={cx(style.Card__image, (grid ? '' :  style['Card__image--spacing'] ))}>
          
          {
            image != null ?
              <img className={style.Card__object} src={image.publicURL} alt=" " />
            :
            <svg className={style.Card__empty} viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path strokeWidth="2" stroke="#e5e5e5" fill="#ffffff" d="M0 0h239.625v119.927H0z"/><path fill="#DCDDDE" d="M18.433 41.231h202.759v3.574H18.433zM18.433 51.954h202.759v3.574H18.433zM18.433 62.677h202.759v3.574H18.433zM18.433 73.4h55.298v3.574H18.433z"/><text fontFamily="Arial-BoldMT, Arial" fontSize="40" fontWeight="bold" fill="#222"><tspan x="155.912" y="65.362">?</tspan></text></g></svg>
          }
        </div>
        <div className={style.Card__body}> 
          <h2 className={cx(style.Card__title, (grid ? style['Card__title--small'] : '' ))}>{title} {lang && <svg width="22" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 0h21.647v16H0z"/></defs><g fill="none" fillRule="evenodd"><path d="M0 0h21.647v16H0z" fill="#006AA7" fillRule="nonzero"/><g><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><path fill="#FECC00" fillRule="nonzero" mask="url(#b)" d="M5.412 6.667H0v2.666h5.412V16h2.706V9.333h13.529V6.667H8.118V0H5.412z"/></g></g></svg>}</h2>
          
          <p className={style.Card__description}>{description}</p>
        </div>
      </article>
     
      
     
    </Link>
  );
}
  



export default Card