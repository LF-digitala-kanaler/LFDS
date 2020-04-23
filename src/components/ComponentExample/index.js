

import React, { useState, useEffect }  from 'react';
import Frame from 'react-frame-component';
import css from '!!raw-loader!lfui-components/dist/docs/docs.css'; 
import svg from '!!raw-loader!lfui-components/dist/lfui/icons.svg'; 
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
  const [source, setSource] = useState(false);
  const [height, setHeight] = useState(300);
  const iframeRef =  React.createRef();
  
  
  const hidden = {
    display: 'none'
  }
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
			script2.src= '/docs.js'; 
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
      let timer = setTimeout(() => handleResize(iframeRef),300)

      // this will clear Timeout when component unmont like in willComponentUnmount
      return () => {
        clearTimeout(timer)
      }
    }
  )
  const handleResize = () => {
    
    if (
      iframeRef.current &&
      iframeRef.current.node.contentDocument &&
      iframeRef.current.node.contentDocument.body.scrollHeight > 300
    ) {
      
      setHeight(iframeRef.current.node.contentDocument.body.scrollHeight);
    }else {
      setHeight(300);
    }
	}

  return (
    <React.Fragment>
        <Grid columns={2} justifyContent="space-around">
          <Cell middle>{ variants.length > 1 && <ComponentNavigation variants={variants} onChildClick={handleChildClick} /> }</Cell>
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
                    <script src="https://d3js.org/d3.v4.min.js"></script>
                    <script  id="script" type="text/javascript" src="/lf.js"></script>
                    <script  id="script2" type="text/javascript" src="/docs.js"></script>
                  </body>
                </html>`}
              head={
                <>

                <style>
                  
                  {
                    `
                    @font-face {
                      font-family: 'LF Rubrik';
                      src:
                        url('/fonts/lf-rubrik.woff2') format('woff2'),
                        url('/fonts/lf-rubrik.woff') format('woff');
                      font-weight: normal;
                      font-style: normal;
                      font-kerning: normal;
                    }

                    @font-face {
                      font-family: 'Intro Cond';
                      src:
                        url('/fonts/intro-cond-regular.woff2') format('woff2'),
                        url('/fonts/intro-cond-regularwoff') format('woff');
                      font-weight: normal;
                      font-style: normal;
                    }

                    @font-face {
                      font-family: 'Intro Cond';
                      src:
                        url('/fonts/intro-cond-regular-italic.woff2') format('woff2'),
                        url('/fonts/intro-cond-regular-italic.woff') format('woff');
                      font-weight: normal;
                      font-style: italic;
                    }

                    @font-face {
                      font-family: 'Intro Cond';
                      src:
                        url('/fonts/intro-cond-bold.woff2') format('woff2'),
                        url('/fonts/intro-cond-bold.woff') format('woff');
                      font-weight: bold;
                      font-style: normal;
                    }

                    @font-face {
                      font-family: 'Intro Cond';
                      src:
                        url('/fonts/intro-cond-bold-italic.woff2') format('woff2'),
                        url('/fonts/intro-cond-bold-italic.woff') format('woff');
                      font-weight: bold;
                      font-style: italic;
                    }
                    `
                  }
                  {css}
                  {' body{padding:16px; overflow-y: auto; background-color:'+backgroundColor+'} '}
                </style>
                </>
              }
            >
            <Content source={`${code}`}  />
            <div style={hidden}>
              <Content source={svg} />
            </div>
            </Frame>
          </Preview>
          
         
        </React.Fragment>
  )
}



export default ComponentExample;