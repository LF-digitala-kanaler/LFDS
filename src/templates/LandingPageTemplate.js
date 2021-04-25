import Blockquote from '../components/Blockquote'
import CardGrid from '../components/CardGrid'
import Content from '../components/Content'
import { GlobalStateContext } from '../context/GlobalContextProvider'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import React from 'react'
import { useContext } from 'react'
import Wrapper from '../components/Wrapper'

const LandingPageTemplate = ({
  title,
  intro,
  body,
  contentBottom,
  blockquote,
  categories = [],
}) => {
  const state = useContext(GlobalStateContext)
  return (
    <div
      className={
        state && state.isMenuOpenDesktop
          ? 'Container Container--push'
          : 'Container'
      }
    >
      <Wrapper tag="div" narrow>
        <Heading tag={1} text={title} align={'center'} />
        <Preamble text={intro} tag="p" align={'center'} />
        {body && <Content className="Content--left" source={body} />}
      </Wrapper>
      <CardGrid list={categories} />
      <Wrapper tag="div" narrow>
        {contentBottom && <Content source={contentBottom} />}
        {blockquote && (
          <Blockquote text={blockquote.text} author={blockquote.author} />
        )}
      </Wrapper>
    </div>
  )
}

export default LandingPageTemplate