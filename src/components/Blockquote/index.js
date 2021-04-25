import * as style from './index.module.css'

import React from 'react'

const Blockquote = ({ text, author }) => {
  return (
    <blockquote className={style.Blockquote}>
      <svg
        className={style.Blockquote__icon}
        width="56"
        height="47"
        viewBox="0 0 56 47"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.367 46.8c9-17.6 11.6-24.6 11.6-31.2v-1.292C23.956.8 23.618.8 12.366.8.533.8.177.8.167 12.665v1.782C.179 24.491.581 24.98 11.318 25l2.449.001-6.6 21.8h5.2zm31.133 0c9-17.6 11.6-24.6 11.6-31.2C55.1.8 55.1.8 43.5.8 31.788.8 31.32.8 31.3 12.302v2.46c.022 9.739.527 10.217 11.152 10.237L44.9 25l-6.6 21.8h5.2z"
          fill="#B1B3B6"
          fillRule="nonzero"
        />
      </svg>
      <p>{text}</p>
      {author && <footer className={style.Blockquote__author}>{author}</footer>}
    </blockquote>
  )
}

export default Blockquote
