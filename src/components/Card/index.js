import React from 'react';
import { Link } from 'gatsby';




const Card = ({title, url, image, text}) => {

   
  return (
    <Link to={url} >
      <p>{title}</p>
      <p>{text}</p>
      <img src={image} alt="" />
    </Link>
  );
}
  



export default Card