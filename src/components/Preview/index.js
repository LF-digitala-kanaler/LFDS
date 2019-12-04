import React from 'react';
import style from './index.module.css';
import { Resizable } from "re-resizable";



const Preview = ({children}) => {

  
  return (
    <div className={style.Preview}>
      <Resizable
        enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
        minWidth={300}
        maxWidth="100%"
        handleComponent={{
          right: <Previewhandle />,
        }}
      >
        <div className={style.Preview__box}>{children}</div>
        
      </Resizable>
    </div>
  );
}
  

const Previewhandle = () => (
  <div className={style.Preview__resize}  draggable="true"></div>
);

export default Preview