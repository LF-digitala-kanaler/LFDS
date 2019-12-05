import React from 'react';
import { Link } from 'gatsby';
import Image from '../Image';




const Card = ({title, url, image, text}) => {

   
  return (
    <Link to={url} >
      <p>{title}</p>
      <p>{text}</p>
      <Image imageInfo={{
        image: image,
        alt: title,
      }}
        />
     
    </Link>
  );
}
  



export default Card