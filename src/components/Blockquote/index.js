import React from 'react';
import style from './index.module.css';

const Blockquote = ({text, author}) => {
  console.log(text)
return <blockquote><p>{text}</p>{ author && <footer>{author}</footer>}</blockquote>
}


export default Blockquote