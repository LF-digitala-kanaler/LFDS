import React from "react"
import style from './index.module.css';
import { Link } from 'gatsby';


const parentDirectory = (url) => {
  if (url.charAt(url.length - 1) == "/") {
     url = url.substr(0, url.length - 1);
  }
  console.log(url, 'ur')
  return url.substring(0, url.lastIndexOf('/'));
 
  
}

const Breadcrumb = ({location}) => {
  console.log(location)
  return (
    <div className={style.Breadcrumb}>
      <li className={style.Breadcrumb__item}>
        <Link  className={style.Breadcrumb__link} to={parentDirectory(location.location.pathname)}>
          {location.category}
        </Link>
      </li>
      <li className={style.Breadcrumb__item}>
        <Link className={style.Breadcrumb__link} to={location.location.pathname}>
          {location.title}
        </Link>
      </li>
    </div>
  )
};


export default Breadcrumb;


