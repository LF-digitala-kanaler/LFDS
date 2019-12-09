import React from 'react';
import { Link } from 'gatsby';
import Image from '../Image';




const Card = ({title, url, image, description}) => {

   
  return (
    <Link to={url} >
      <p>{title}</p>
      <p>{description}</p>
      <Image imageInfo={{
        image: image
      }}
        />
     
    </Link>
  );
}
  



export default Card