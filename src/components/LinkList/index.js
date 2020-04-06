import React from 'react';
import style from './index.module.css';
import { Link } from 'gatsby';


const LinkList = ({items}) => {
  
  console.log(items)
  const links = items.map(item => {
   return  +/^[/#](?!\/)/.test(item.url) ? (
      <li key={item.url} className={style.LinkList__item}><Link className={style.LinkList__link} to={item.url}>{item.text}</Link></li>
    ) : (
      <li key={item.url} className={style.LinkList__item}><a  rel="external nofollow noreferrer noopener" className={style.LinkList__link} href={item.url}>{item.text}</a></li>
    );
  })
  return (
    <>
      <nav className={style.LinkList}>
        <ul className={style.LinkList__list}>
          {links}
        </ul>
      </nav>
    </>
  );
}
  
export default LinkList