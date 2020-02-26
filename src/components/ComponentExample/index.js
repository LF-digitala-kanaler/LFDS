

import React, { useState, useEffect }  from 'react';
import Frame from 'react-frame-component';
import css from '!!raw-loader!lfui/dist/lf.css'; 
import svg from '!!raw-loader!lfui/dist/icons.svg'; 
import Preview from '../Preview';
import Actions from '../Actions'
import Content from '../Content';
import CodeBlock from '../CodeBlock';
import ComponentNavigation from '../ComponentNavigation';
import { Grid, Cell } from "styled-css-grid";
import $ from 'jquery'


const ComponentExample = ({variants, background}) => {
  const [backgroundColor, setBackground] = useState(background ? background : '#fff'); // if background is et in Netlify, use that value 
  const [code, setCode] = useState(variants[0].node.content);
  const [script, setScript] = useState(false);
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
    setCode(variant.content)
    init()
  }
  
	const init =(isMount) => {
    // setCode(variants[0].node.content)
		
		let iframe = document.getElementsByTagName('iframe')[0];
		let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
		let body= iframeDoc.getElementsByTagName('body')[0]; 

    
		let $script = $('#script', iframeDoc);
		 function reload() {
			let script= document.createElement('script');
			script.type= 'text/javascript'; 
			script.src= '/lf.js'; 
			body.appendChild(script);
			script.parentNode.removeChild(script);

      let script2= document.createElement('script');
			script2.type= 'text/javascript'; 
			script2.src= '/test.js'; 
			body.appendChild(script2);
			script2.parentNode.removeChild(script2);
     
		}
		if(isMount){
			$script.on('load', function(){
				reload()
       
			})
		}else{
			reload()
		}
    
	}
  useEffect(
    () => {
      let timer = setTimeout(() => handleResize(iframeRef), 400)

      // this will clear Timeout when component unmont like in willComponentUnmount
      return () => {
        clearTimeout(timer)
      }
    }
  )
  //useEffect(() => handleResize(iframeRef));
  
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

  //useEffect(() => handleResize(iframeRef));
  

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
          
              id={'iframe'}
              ref={iframeRef}
              contentDidMount={() => init(iframeRef)}
              contentDidUpdate={() => init(iframeRef)}
              initialContent={`
              <!DOCTYPE html>
                <html>
                  <head>
                  </head>
                  <body style="margin: 0">
                    <div class="frame-root"></div>
                    <script
                    src="https://code.jquery.com/jquery-3.3.1.js"
                    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
                    crossorigin="anonymous"></script>
                    <script  id="script" type="text/javascript" src="/lf.js"></script>
                    <script  id="script2" type="text/javascript" src="/test.js"></script>
                  </body>
                </html>`}
              head={
                <>

                <style>
                  {css}
                  
                  {' body{padding:16px; background-color:'+backgroundColor+'} '}
                </style>
                </>
              }
            >
            <Content source={`${code}`}  />
            <Content source={svg} />
            
            </Frame>
          </Preview>
          
         
        </React.Fragment>
  )
}



export default ComponentExample;