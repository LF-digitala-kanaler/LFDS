import React, { useState, useEffect }  from 'react';
import Frame from 'react-frame-component';

import Preview from '../Preview';
import Actions from '../Actions'
import Content from '../Content';
import CodeBlock from '../CodeBlock';
import ComponentNavigation from '../ComponentNavigation';
import { Grid, Cell } from "styled-css-grid";

const ComponentExample = ({variants, background}) => {
  const [backgroundColor, setBackground] = useState(background ? background : '#fff'); // if background is set in Netlify, use that value 
  const [url, setUrl] = useState(0);
  const [code, setCode] = useState(variants[0].node.content);
  
  const [source, setSource] = useState(false);
  const [height, setHeight] = useState(240);
  const iframeRef =  React.createRef();
  
  const toggleCode = () => {
    setSource(!source) 
  }

  const handleSetBackgroundToWhite = () => {
    setBackground('#ffffff');
  }

  const handleSetBackgroundToGrey = () => {
    setBackground('#f3f3f3');
  }

  const handleChildClick = (variant) => {
    setUrl(variant.slug)
    setCode(variant.content)
  }
  const contentDidMount = () => {
    
    if(url === 0) {
      setUrl(variants[0].node.slug);
    }else {
      setUrl(url)
    } 
  }
  const contentDidUpdate= () => {
    console.log(backgroundColor)
    
  }
  const handleResize = (variant) => {
   
    
    if (
      iframeRef.current &&
      iframeRef.current.node.contentDocument &&
      iframeRef.current.node.contentDocument.body.scrollHeight > 240
    ) {
      setHeight(iframeRef.current.node.contentDocument.body.scrollHeight);
    }
	}


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
                backgroundColor: backgroundColor
              }}
              
              ref={iframeRef}
              src={`/${url}`}
              contentDidMount={() => contentDidMount(iframeRef)}
              // contentDidUpdate={() => contentDidUpdate(iframeRef)}
              head={
                <>
                  <style>
                    {' body{background-color:'+backgroundColor+'} '}
                  </style>
                </>
              }
              
            >
            </Frame>
          </Preview>
        </React.Fragment>
  )
}



export default ComponentExample;


