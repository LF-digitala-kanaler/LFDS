import React from 'react'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import CardList from '../components/CardList'
import Blockquote from '../components/Blockquote'
import Content from '../components/Content'
import rehypeReact from 'rehype-react'
import Collapse from '../components/Collapse'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { collapse: Collapse },
}).Compiler
// Export Template for use in CMS preview
const CategoryOverviewTemplate = ({
  title,
  intro,
  blockquote,
  contentAbove,
  categoryPages,
  body,
  bodyHtml,
}) => (
  <>
    <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={'left'} />
      <Preamble text={intro} tag="p" align={'left'} />
      <Content className="content" source={contentAbove} />
      {categoryPages && <CardList list={categoryPages} />}
      {bodyHtml ? (
        <div className="Content">{renderAst(bodyHtml)}</div>
      ) : (
        <Content className="Content" source={body} />
      )}

      {blockquote && (
        <Blockquote text={blockquote.text} author={blockquote.author} />
      )}
    </Wrapper>
  </>
)

export default CategoryOverviewTemplate;