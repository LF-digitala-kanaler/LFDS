import React from 'react'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import Content from '../components/Content'
import HeroBlock from '../components/HeroBlock'
import rehypeReact from 'rehype-react'
import Collapse from '../components/Collapse'
import LfuiWrapper from '../components/LfuiWrapper/'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    collapse: Collapse,
    lfuiwrapper: LfuiWrapper,
  },
}).Compiler

const ArticlePageTemplate = ({
  title,
  intro,
  body,
  bodyHtml,
  heroBlock,
  wrapperWidth,
  contentTop
}) => (
  <>
    <Wrapper tag="div" menu={true} narrow>
      <Heading tag={1} text={title} align={'left'} />
      <Preamble text={intro} tag="p" align={'left'} />
      
      <Wrapper tag="div" narrow>
        {contentTop && <Content source={contentTop} />}  
      </Wrapper>
    </Wrapper>
    
    {heroBlock && (
      <HeroBlock
        background={heroBlock.color}
        quote={heroBlock.quote}
        cite={heroBlock.cite}
        image={heroBlock.image}
      />
      
    )}
    <Wrapper tag="div" menu={true} narrow={wrapperWidth ? false : true}>
      {bodyHtml ? (
        <div
          className={`Content  ${
            wrapperWidth === true ? 'Content--normal' : 'Content--tight'
          }`}
        >
          {renderAst(bodyHtml)}
        </div>
      ) : (
        <Content
          className={`Content  ${
            wrapperWidth === true ? 'Content--normal' : 'Content--tight'
          }`}
          source={body}
        />
      )}
    </Wrapper>
  </>
)

export default ArticlePageTemplate