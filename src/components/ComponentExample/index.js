import React, { useEffect, useState } from 'react'
import Frame from 'react-frame-component'
import css from '!!raw-loader!@lansforsakringar/components/dist/docs/style.css'
import fonts from '!!css-loader!@lansforsakringar/fonts/index.css'
import Actions from '../Actions'
import Content from '../Content'
import Preview from '../Preview'
import CodeBlock from '../CodeBlock'
import style from './index.module.css'
import ComponentNavigation from '../ComponentNavigation'

const DEFAULT_BACKGROUND_COLOR = '#fff'
const DEFAULT_THEME = 'on-gray'

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
  const [backgroundColor, setBackground] = useState(
    background ?? DEFAULT_BACKGROUND_COLOR
  )
  const [themeColor, setTheme] = useState(
    background ?? DEFAULT_THEME
  )
  const [code, setCode] = useState(
    navigation ? nav[0].example[0].node.content : variants[0].node.content
  )

  const [source, setSource] = useState(false)
  const [minHeight, setHeight] = useState(300)
  const iframe = React.useRef()

  const toggleCode = () => {
    setSource(!source)
  }

  const handleToWhite = () => {
    setBackground('#fff')
    setTheme('on-white')
  }

  const handleToGrey = () => {
    setBackground('#f3f3f3')
    setTheme('on-gray')
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
              white={handleToWhite}
              grey={handleToGrey}
              toggleCode={toggleCode}
            />
          </div>
        </div>
        {source && <CodeBlock code={`${code}`} />}
        <Preview resize={verticalResize}>
          <Frame
            style={{ minHeight: Math.max(minHeight, 300) }}
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
                    padding: 1rem;
                    overflow-y: auto;
                    background-color: ${backgroundColor};
                  }`}
                </style>
              </>
            }
          >
            <Content
              theme={themeColor}
              source={
                backgroundColor === DEFAULT_BACKGROUND_COLOR
                  ? code
                  : code
                    .replaceAll(
                      '"form-control"',
                      '"form-control form-control-white"'
                    )
                    .replaceAll(
                      '"custom-file"',
                      '"custom-file custom-file-white"'
                    )
                    .replaceAll(
                      '"input-group"',
                      '"input-group input-group-white"'
                    )
              }
            />
          </Frame>
        </Preview>
      </div>
    </React.Fragment>
  )
}

export default ComponentExample
