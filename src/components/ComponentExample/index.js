import React, { useState }  from 'react';
import Frame from 'react-frame-component';
import css from '!!raw-loader!lfui/dist/lf.css'; 
import Preview from '../Preview';
import Actions from '../Actions'
import HtmlBlock from '../Content';



const ComponentExample = ({variants, background}) => {
  console.log(background.value,'back')
  
  const [backgroundColor, setBackground] = useState('#fff');
  const [code, setCode] = useState(variants[0].node.content);

  const handleSetBackgroundToWhite = () => {
    setBackground('#fff');
  }

  const handleSetBackgroundToGrey = () => {
    setBackground('#f3f3f3');
  }
  const navigation = (variants) =>
    variants.map((item) => {
      console.log(item, 'faga')
      return (
        <li key={item.node.id}>{item.node.name}</li>
      );
    });
 
  return (
    <React.Fragment>
      
         {navigation(variants)}
          <Preview>
            <Actions white={handleSetBackgroundToWhite} grey={handleSetBackgroundToGrey} />
            <Frame
            
            head={
              
              <style>
                {css}
                
                {'body{padding:16px 38px 16px 16px; background-color:'+backgroundColor+'}'}
              </style>
            }
          
            >
            <HtmlBlock source={code} />
            </Frame>
          </Preview>
        </React.Fragment>
  )
}



export default ComponentExample;


