import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import style from './index.module.css'

const CodeBlock = ({ code }) => {
  return (
    <div className={style.CodeBlock}>
      <SyntaxHighlighter language="html" style={a11yLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
