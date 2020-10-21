import React, {useEffect } from 'react';
import style from './index.module.css'
import { Resizable } from 're-resizable'
import cx from 'classnames'

const Preview = ({ children, resize }) => {
  const verticalResize = resize === 'yes' ? true : false

  


  return (
    <div className={cx(style.Preview, verticalResize ? style['Preview--vertical'] : '')}>
      <Resizable
        id="resizable"
        enable={{
          top: false,
          right: !verticalResize,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: verticalResize,
          topLeft: false,
        }}
        minWidth={300}
        maxWidth="100%"
        minHeight="300"
        
        defaultSize={{
          height: verticalResize ? '300px' : '100%',
        }}
        handleComponent={{
          right: <Previewhandle />,
          bottomRight: <PreviewhandleCorner />,
        }}
      >
         
        <div className={style.Preview__box}>{children}</div>
      </Resizable>
    </div>
  )
}

const Previewhandle = () => (
  <div className={style.Preview__resize} draggable="true"></div>
)

const PreviewhandleCorner = () => (
  <div className={cx(style.Preview__resize, style['Preview__resize--corner'])} draggable="true"></div>
)

export default Preview
