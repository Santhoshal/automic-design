import React from 'react';
import './Image.css';

const Image=(props) =>{
  const {
    className = '', children, src = '', altText = '', ...rest
  } = props;

  return (
    <img
      className={`atom--image ${className}`}
      src={src}
      alt={altText}
      {...rest}
    />
  );
}

export default Image;
export { Image };
