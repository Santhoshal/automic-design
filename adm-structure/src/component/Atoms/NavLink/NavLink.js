import React from 'react';
import './NavLink.css';

const NavLink=(props) =>{
  const {
    className = '', children, text = '', url = '', target = '', image, ...rest
  } = props;

  return (
    <a
      className={`atom--link ${className}`}
      href={url}
      target={target}
      {...rest}
    >
      {children || text}
    </a>
  );
}

export default NavLink;
export { NavLink };
