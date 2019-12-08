import React from "react"
import style from './index.module.css';
import cx from 'classnames';




const Actions = ({grey,white}) => {

  
  return (
    <div className={style.Actions}>
      <ul className={style.Actions__list}>
        <li className={style.Actions__item}>
          <button className={cx(style.Actions__button, style.Actions__circle, style['Actions__circle--grey'])} onClick={grey}>Grey background</button>
        </li>
        <li className={style.Actions__item}>
          <button className={cx(style.Actions__button, style.Actions__circle)} onClick={white}>White background</button>
        </li>
        <li className={style.Actions__item}>
          <button className={style.Actions__button}>
              <svg className={style.Actions__icon} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="26" height="16"><defs><path id="a" d="M5.5 6.225l-6.293 6.293-1.414-1.414L5.5 3.396l7.707 7.708-1.414 1.414z"/></defs><defs><use xlinkHref="#a"/><use id="b" xlinkHref="#a"/></defs><g fill="none" fillRule="evenodd"><path d="M-11-8h32v32h-32z"/><use fill="#515151" transform="rotate(-90 5 8.457)" xlinkHref="#a"/><g><path d="M5-8h32v32H5z"/><use fill="#515151" transform="matrix(0 -1 -1 0 29.457 13.457)" xlinkHref="#b"/></g></g></svg>
          </button>
        </li>
        <li className={style.Actions__item}>
          <button className={style.Actions__button}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 4v2H4v14h14v-8h2v10H2V4h10zm10-2v7h-2V5.414l-7.293 7.293-1.414-1.414L18.584 4H15V2h7z" id="d"/></defs><g transform="translate(-2 -2)" fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"/><use fill="#515151" xlinkHref="#d"/></g></svg>
          </button>
        </li>
      </ul>
    </div>
  )
};


export default Actions;


