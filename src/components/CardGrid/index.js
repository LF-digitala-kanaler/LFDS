import Card from '../Card'
import React from 'react'
import style from './index.module.css'

const CardGrid = ({ list }) => {
  const cardItems = list.map((item, index) => {
    if (item.category !== 'null') {
      return (
        <div key={index}>
          <Card
            grid={true}
            title={item.link[0].node.frontmatter.category}
            url={'/' + item.link[0].node.fields.contentType}
            image={
              item.previewImage || item.link[0].node.frontmatter.previewImage
            }
          />
        </div>
      )
    } else {
      return item.link.map((items) => {
        return (
          <div key={items.node.id}>
            <Card
              grid={true}
              title={items.node.frontmatter.title}
              url={items.node.fields.slug}
              image={items.node.frontmatter.previewImage}
              lang={items.node.frontmatter.lang}
            />
          </div>
        )
      })
    }
  })

  return (
    <section className={style.CardGrid}>
      <div className={style.CardGrid__grid}>{cardItems}</div>
    </section>
  )
}

export default CardGrid
