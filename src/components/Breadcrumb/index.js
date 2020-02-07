import React from "react"
import style from './index.module.css';
import { Link } from 'gatsby';


const parentDirectory = (url) => {
  return url.substring(0, url.lastIndexOf('/'));
}

const Breadcrumb = ({location}) => {
  console.log(location.location.pathname.split('/')[2], 'item')
  return (
    <div className={style.Breadcrumb}>
      
        <li className={style.Breadcrumb__item}>
          <Link className={style.Breadcrumb__link} to={location.location.pathname.split('/')[1]+'/'+location.location.pathname.split('/')[2]}>
            {location.location.pathname.split('/')[1]}
          </Link>
        </li>
      
      {location.category &&
        <li className={style.Breadcrumb__item}>
          <Link  className={style.Breadcrumb__link} to={parentDirectory(location.location.pathname)}>
            {location.category}
          </Link>
        </li>
      }
      <li className={style.Breadcrumb__item}>
        <Link className={style.Breadcrumb__link} to={location.location.pathname}>
          {location.title}
        </Link>
      </li>
    </div>
  )
};


export default Breadcrumb;


