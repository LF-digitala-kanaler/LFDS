import React from 'react';
import style from './index.module.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({code}) => {

  return (
    <div className={style.CodeBlock}>
      <SyntaxHighlighter language="javascript" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock