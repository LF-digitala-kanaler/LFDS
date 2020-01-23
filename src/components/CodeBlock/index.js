import React, {useRef, useEffect} from 'react';
import style from './index.module.css';
import Prism from "prismjs"


const CodeBlock = ({code}) => {
  const ref = useRef(null);
  console.log(code)
  useEffect(() => {
    highlight()
    console.log("Mount");
  }, []);

  useEffect(() => {
    highlight()
    console.log("Behavior when the component receives new state or props.", ref.current);
    return function cleanup() {
      highlight()
      console.log("unmount.", ref.current);
    };
    
  });

  const highlight = () => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }
  return (
    <pre className={style.CodeBlock}>
      <code ref={ref} className={style.CodeBlock__code, 'language-html'}> {code.trim()}</code>
    </pre>

  );
}

export default CodeBlock