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
          return (
            <span key={i}>
              <h3 className="mb-2">{item.group} pixels icons</h3>
              <Row gutter={32}>
                {item.icons.map((icon) => {
                  return (
                    <Col span={12} sm={6} md={4} key={icon.name}>
                      <div className="icon-container mb-2">
                        {
                          <div
                            className="icon"
                            dangerouslySetInnerHTML={{
                              __html: icon.svgData,
                            }}
                          />
                        }
                        <div className="text-sm">{icon.name}</div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </span>
          )
        })}
        <Content className="Content--tight" source={specialIconsContent} />
        {iconsSpecial.map((item) => {
          return (
            <span key={item.group}>
              <h3 className="mb-2">
                {item.group.replace('special/', '')} pixels icons
              </h3>
              <Row gutter={32}>
                {item.icons.map((icon) => {
                  return (
                    <Col span={12} sm={6} md={4} key={icon.name}>
                      <div className="icon-container mb-2">
                        {
                          <div
                            className="icon"
                            dangerouslySetInnerHTML={{
                              __html: icon.svgData,
                            }}
                          />
                        }
                        <div className="text-sm">{icon.name}</div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </span>
          )
        })}
      </div>
    </Wrapper>
  </>
)

export default IconsTemplate
