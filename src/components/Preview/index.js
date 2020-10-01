import React from 'react'
import style from './index.module.css'
import { Resizable } from 're-resizable'

const Preview = ({ children, resize }) => {
  const verticalResize = resize === 'yes' ? true : false

  return (
    <div className={style.Preview}>
      <Resizable
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
        handleComponent={{
          right: <Previewhandle />,
          bottomRight: <Previewhandle />,
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

export default Preview
