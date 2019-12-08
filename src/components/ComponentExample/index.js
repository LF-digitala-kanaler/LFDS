import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';
import Frame from 'react-frame-component';
import css from '!!raw-loader!lfui/dist/lf.css'; 
import Preview from '../Preview';
import Actions from '../Actions'
import HtmlBlock from '../Content';
import CodeBlock from '../CodeBlock';



const ComponentExample = ({variants, background}) => {
  
  const [backgroundColor, setBackground] = useState(background ? background : '#fff'); // if background is et in Netlify, use that value 
  const [code, setCode] = useState(variants[0].node.content);
  const [source, setSource] = useState(false);
  const [height, setHeight] = useState(240);
  const iframeRef =  React.createRef();


  const toggleCode = () => {
    setSource(!source)
    console.log(source)
  }
  const handleSetBackgroundToWhite = () => {
    setBackground('#fff');
  }

  const handleSetBackgroundToGrey = () => {
    setBackground('#f3f3f3');
  }
  const loadCode = (variant) => {
    setCode(variant)
  }
  const navigation = (variants) =>
  
    variants.map((item) => {
      return (
        <li key={item.node.id} onClick={ () =>loadCode(item.node.content)}>{item.node.name}</li>
      );
    });

  const handleResize = () => {
    console.log(iframeRef.current.node.contentDocument.body.scrollHeight)
    if (
      iframeRef.current &&
      iframeRef.current.node.contentDocument &&
      iframeRef.current.node.contentDocument.body.scrollHeight > 240
    ) {
      setHeight(iframeRef.current.node.contentDocument.body.scrollHeight);
    }
	}

  useEffect(() => handleResize(iframeRef));


  return (
    <React.Fragment>
         {navigation(variants)}
          <Preview>
            <Actions white={handleSetBackgroundToWhite} grey={handleSetBackgroundToGrey} toggleCode={toggleCode} />
            <Frame
              style={{
                height,
              }}
              ref={iframeRef}
              onLoad={() => handleResize(iframeRef)}
              head={
                <style>
                  {css}
                  
                  {' body{padding:16px 38px 16px 16px; background-color:'+backgroundColor+'}'}
                </style>
              }
            >
            <HtmlBlock source={code} />
            </Frame>
          </Preview>
          {
            source &&
            <CodeBlock>{code}</CodeBlock>
          }
         
        </React.Fragment>
  )
}



export default ComponentExample;


