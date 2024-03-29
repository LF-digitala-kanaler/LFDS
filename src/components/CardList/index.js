import Card from '../Card'
import React from 'react'
import { stripTrailingSlash } from '../../utils/RemoveTrailingSlash'

const CardList = ({ list }) => {
  return list.map((item) => {
    return (
      <Card
        key={item.node.id}
        description={item.node.frontmatter.description}
        title={item.node.frontmatter.title}
        url={stripTrailingSlash(item.node.fields.slug)}
        image={item.node.frontmatter.previewImage}
        text={item.node.fields.slug}
        lang={item.node.frontmatter.lang}
      />
    )
  })
}

export default CardList
