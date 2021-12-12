import { Col, Row } from 'react-simple-flex-grid'

import Changelog from '../components/Changelog'
import FullWidthBackground from '../components/FullWidthBackground'
import Heading from '../components/Heading'
import LinkList from '../components/LinkList'
import Preamble from '../components/Preamble'
import React from 'react'
import SearchBlock from '../components/SearchBlock'
import Shortcut from '../components/Shortcut'
import Wrapper from '../components/Wrapper'

const HomePageTemplate = ({
  title,
  intro,
  shortcuts,
  shortcutsBottom,
  shortcutsImage,
  fullWidthImage,
  relatedLinks,
  imageSource,
}) => (
  <>
    <Wrapper wide center tag="div">
      <Heading tag={1} text={title} align={'center'} />
      <Preamble text={intro} tag="p" align={'center'} />
    </Wrapper>
    <SearchBlock />
    <Wrapper wide center tag="div">
      <Row gutter={64} justify="center">
        {shortcuts &&
          shortcuts.map((item) => {
            return (
              <Col span={12} sm={6} md={4} key={item.title}>
                <Shortcut
                  title={item.title}
                  icon={item.icon.publicURL ? item.icon.publicURL : item.icon}
                  text={item.text}
                  path={item.link}
                />
              </Col>
            )
          })}
      </Row>
    </Wrapper>

    {fullWidthImage && (
      <FullWidthBackground
        title={fullWidthImage.title}
        imageSource={imageSource ? imageSource : fullWidthImage.fullWidthImageDesktop}
      >
        <Row gutter={52} justify="center">
          {shortcutsImage &&
            shortcutsImage.map((item) => {
              return (
                <Col span={12} lg={4} key={item.title}>
                  <Shortcut
                    horizontal
                    title={item.title}
                    icon={item.icon.publicURL ? item.icon.publicURL : item.icon}
                    text={item.text}
                    path={item.link}
                  />
                </Col>
              )
            })}
        </Row>
      </FullWidthBackground>
    )}
    <Wrapper wide center tag="div">
      <Row gutter={64} justify="center">
        {shortcutsBottom &&
          shortcutsBottom.map((item) => {
            return (
              <Col span={12} sm={6} md={4} key={item.title}>
                <Shortcut
                  title={item.title}
                  icon={item.icon.publicURL ? item.icon.publicURL : item.icon}
                  text={item.text}
                  path={item.link}
                />
              </Col>
            )
          })}
      </Row>
      <Row gutter={128} justify="center">
        <Col span={12} sm={6}>
          <Heading tag={3} text={'Release info'} align={'left'} />
          <Changelog />
        </Col>
        <Col span={12} sm={6}>
          <Heading
            tag={3}
            text={'Links you can´t live without'}
            align={'left'}
          />
          {relatedLinks && <LinkList items={relatedLinks} />}
        </Col>
      </Row>
    </Wrapper>
  </>
)

export default HomePageTemplate
