import React from 'react';
import style from './index.module.css';


export const Search = () => {
  
  return (
    <div className={style.Search}>
      <button className={style.Search__button}>
        <svg className={style.Search__icon} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M-2-2h24v24H-2z"/><path d="M15.207 13.793l4.5 4.5-1.414 1.414-4.5-4.5 1.414-1.414zM8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2z" fill="#515151"/></g></svg>
         <span className={style.Search__text}>Sök</span>
      </button>
    </div>
  );
}



export default Search