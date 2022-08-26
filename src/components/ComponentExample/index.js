import React, { useEffect, useState } from 'react'
import Frame from 'react-frame-component'
import css from '!!raw-loader!@lf-digitala-kanaler/lfui-components/dist/docs/style.css'
import fonts from '!!css-loader!@lf-digitala-kanaler/fonts/index.css'
import Actions from '../Actions'
import Content from '../Content'
import Preview from '../Preview'
import CodeBlock from '../CodeBlock'
import style from './index.module.css'
import ComponentNavigation from '../ComponentNavigation'

const ComponentExample = ({
  variants,
  background,
  verticalResize,
  navigation
}) => {
  if (navigation) {
    var nav = navigation.map((items) => {
      return {
        name: items.name,
        example: variants.filter(
          (item) =>
            items.name.replace(/\s/g, '').toLowerCase() ===
            item.node.name.toLowerCase()
        )
      }
    })
  }

  // if background is set in cms, use that value
  const [backgroundColor, setBackground] = useState(background ?? '#fff')
  const [code, setCode] = useState(
    navigation ? nav[0].example[0].node.content : variants[0].node.content
  )

  const [source, setSource] = useState(false)
  const [minHeight, setHeight] = useState(300)
  const iframe = React.useRef()

  const toggleCode = () => {
    setSource(!source)
  }

  const handleSetBackgroundToWhite = () => {
    setBackground('#fff')
  }

  const handleSetBackgroundToGrey = () => {
    setBackground('#f3f3f3')
  }

  const handleChildClick = (nav) => {
    setCode(nav.content)
  }

  const onUpdate = () => {
    const document = iframe.current?.contentDocument
    if (document) {
      setHeight(document.body.scrollHeight + 10)
    } else {
      setHeight(300)
    }
  }

  const init = () => {
    const window = iframe.current?.contentWindow
    window.DOCS?.initialize(window.document)
    onUpdate()
  }

  useEffect(init, [code])

  useEffect(() => {
    let timeout
    window.addEventListener('resize', () => {
      clearTimeout(timeout)
      timeout = setTimeout(onUpdate, 400)
    })
  })

  return (
    <React.Fragment>
      <div className={style.ComponentExample}>
        <div className={style.ComponentExample__head}>
          <div>
            {variants.length > 1 && navigation && (
              <ComponentNavigation
                onChildClick={handleChildClick}
                navigation={nav}
              />
            )}
          </div>
          <div>
            <Actions
              white={handleSetBackgroundToWhite}
              grey={handleSetBackgroundToGrey}
              toggleCode={toggleCode}
            />
          </div>
        </div>
        {source && <CodeBlock code={`${code}`} />}
        <Preview resize={verticalResize}>
          <Frame
            style={{ minHeight }}
            ref={iframe}
            mountTarget={'#frame-root'}
            contentDidUpdate={onUpdate}
            contentDidMount={init}
            initialContent={`
              <!DOCTYPE html>
              <html class="lfui-theme">
                <body style="margin: 0">
                  <div id="frame-root"></div>
                  <script src="/docs/main.umd.js"></script>
                </body>
              </html>
            `}
            head={
              <>
                <style>
                  {fonts.toString()}
                  {css}
                  {`.lfui-theme body {
                    padding: 16px;
                    overflow-y: auto;
                    background-color: ${backgroundColor};
                  }`}
                </style>
              </>
            }
          >
            <Content source={`${code}`} />
          </Frame>
        </Preview>
      </div>
    </React.Fragment>
  )
}

export default ComponentExample
