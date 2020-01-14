import React from 'react';
import Card from '../Card';
import { Grid, Cell } from "styled-css-grid";

const CardGrid = ({list}) => {

  const cardItems = list.map((item) => 
    <Cell key={item.id}><Card grid={true}  title={item.frontmatter.title} url={item.fields.slug.replace(/\/$/, "")} image={item.frontmatter.previewImage}  /></Cell>
  );
  return (
    <Grid columns={3} gap="44px">{cardItems}</Grid>
  )
}


export default CardGrid


