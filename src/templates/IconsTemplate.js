import { Col, Row } from 'react-simple-flex-grid'

import Collapse from '../components/Collapse'
import Content from '../components/Content'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import React from 'react'
import Wrapper from '../components/Wrapper'
import rehypeReact from 'rehype-react'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    collapse: Collapse,
  },
}).Compiler
const IconsTemplate = ({
  title,
  intro,
  body,
  bodyHtml,
  iconsRegular,
  iconsSpecial,
  specialIconsContent,
}) => (
  <>
    <Wrapper tag="div" narrow menu={true}>
      <Heading tag={1} text={title} align={'left'} />
      <Preamble text={intro} tag="p" align={'left'} />
      {bodyHtml ? (
        <div className="Content Content--tight">{renderAst(bodyHtml)}</div>
      ) : (
        <Content className="Content Content--tight" source={body} />
      )}

      <div className="Icons">
        {iconsRegular.map((item, i) => {
          const id = `${item.name.replace(/\W+/, '-')}-regular${item.color ? '-color' : ''}`
          return (
            <div key={id}>
              <h3 className="mb-2">{item.name} {item.color ? '(color)' : ''}</h3>
              <Row gutter={32}>
                {item.icons.map((icon) => {
                  return (
                    <Col span={12} sm={6} md={4} key={`${id}-${icon.name}`}>
                      <div className="icon-container mb-2">
                        <svg width={icon.width} height={icon.height} className="icon">
                          <use xlinkHref={'/lf-icons/sprite/' + icon.relativeDirectory + '/icons.svg#' + icon.name} />
                        </svg>
                        <div className="text-sm">{icon.name}</div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </div>
          )
        })}
        <Content className="Content--tight" source={specialIconsContent} />
        {iconsSpecial.map((item) => {
          const id = `${item.name.replace(/\W+/, '-')}-special${item.color ? '-color' : ''}`
          return (
            <div key={id}>
              <h3 className="mb-2">{item.name} {item.color ? '(color)' : ''}</h3>
              <Row gutter={4}>
                {item.icons.map((icon) => {
                  return (
                    <Col span={12} sm={6} md={4} key={`${id}-${icon.name}`}>
                      <div className="icon-container mb-2">
                        <svg className="icon" width={icon.width} height={icon.height}>
                          <use xlinkHref={'/lf-icons/sprite/special/icons.svg#' + icon.name} />
                        </svg>
                        <div className="text-sm">{icon.name}</div>
                      </div>
                    </Col>
                  )

                })}
              </Row>
            </div>
          )
        })}
      </div>
    </Wrapper>
  </>
)

export default IconsTemplate
