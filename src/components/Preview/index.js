import React from 'react';
import style from './index.module.css';
import { Resizable } from "re-resizable";



const Preview = ({direction, children}) => {
  console.log(direction)
  
  return (
    <div className={style.Preview}>
      <Resizable
        enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomRight:true, topLeft:false }}
        minWidth={300}
        maxWidth="100%"
        handleComponent={{
          right: <Previewhandle />,
          bottomRight: <Previewhandle />
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