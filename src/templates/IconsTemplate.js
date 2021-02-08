import React from 'react'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import icons from '!!raw-loader!lfui-components/dist/lfui/icons.svg'
import iconsRegular from '!!raw-loader!lfui-components/dist/docs/icons/regular.md'
import iconsSpecial from '!!raw-loader!lfui-components/dist/docs/icons/special.md'
import Content from '../components/Content'
import rehypeReact from 'rehype-react'
import Collapse from '../components/Collapse'
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
    </Wrapper>

    <Wrapper tag="div" menu={true}>
      <div className="Icons">
        <Content source={iconsRegular} />

        <Content className="Content--tight" source={specialIconsContent} />

        <Content source={iconsSpecial} />
        <Content source={icons} />
      </div>
    </Wrapper>
  </>
)

export default IconsTemplate

