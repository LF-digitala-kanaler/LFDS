import React from 'react';
import Card from '../Card';

const CardList = ({list}) => {
  console.log(list)
    return list.map((item) => { 
      return <Card key={item.node.id} text={item.node.frontmatter.description} title={item.node.frontmatter.title} url={item.node.fields.slug} image={item.node.frontmatter.previewImage} text={item.node.fields.slug} /> 
    })
  
}


export default CardList