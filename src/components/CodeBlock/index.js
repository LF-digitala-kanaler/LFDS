import React from 'react';
import style from './index.module.css';

const CodeBlock = ({children}) => {
  return (
    <pre  className={style.CodeBlock}>
      <code className={style.CodeBlock__code}>{children}</code>
    </pre>

  );
}

export default CodeBlock