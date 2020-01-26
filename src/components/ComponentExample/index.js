import React, { useState, useEffect }  from 'react';
import Frame from 'react-frame-component';
import css from '!!raw-loader!lfui/dist/lf.css'; 
import Preview from '../Preview';
import Actions from '../Actions'
import Content from '../Content';
import CodeBlock from '../CodeBlock';
import ComponentNavigation from '../ComponentNavigation';
import { Grid, Cell } from "styled-css-grid";


const ComponentExample = ({variants, background}) => {
  const [backgroundColor, setBackground] = useState(background ? background : '#fff'); // if background is et in Netlify, use that value 
  const [code, setCode] = useState(variants[0].node.content);
  
  const [source, setSource] = useState(false);
  const [height, setHeight] = useState(240);
  const iframeRef =  React.createRef();
  

  const toggleCode = () => {
    setSource(!source)
    
  }

  const handleSetBackgroundToWhite = () => {
    setBackground('#fff');
  }

  const handleSetBackgroundToGrey = () => {
    setBackground('#f3f3f3');
  }

  const handleChildClick = (variant) => {
    setCode(variant)
   

  }
  

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
        <Grid columns={2} justifyContent="space-around">
          <Cell middle><ComponentNavigation variants={variants} onChildClick={handleChildClick} /></Cell>
          <Cell middle><Actions white={handleSetBackgroundToWhite} grey={handleSetBackgroundToGrey} toggleCode={toggleCode} /></Cell>
        </Grid>
          {
            source &&
            <CodeBlock code={`${code}`} />
          }
          <Preview>
            <Frame
              style={{
                height,
              }}
              ref={iframeRef}
              onLoad={() => handleResize(iframeRef)}
              head={
                <style>
                  {css}
                  
                  {' body{padding:16px; background-color:'+backgroundColor+'} '}
                </style>
              }
            >
            <Content source={code} />
            </Frame>
          </Preview>
          
         
        </React.Fragment>
  )
}



export default ComponentExample;


