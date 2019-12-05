import React from 'react';
import Card from '../Card';

const CardList = ({list}) => {
    return list.map((item) => { 
      return <Card key={item.node.id} title={item.node.frontmatter.title} url={item.node.fields.slug} image={item.node.frontmatter.previewImage} text={item.node.fields.slug} /> 
    })
  
}


export default CardList