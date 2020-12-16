import React from 'react';
import './Title.css';

const Title=(props) =>{
  const {
    className = '', children, text = '', tagName = 'h1', ...rest
  } = props;

  const TypeAsComponent = tagName || 'h1' ;

  const headingClassNames = `atom--heading ${className}`;
  return (
    <TypeAsComponent className={headingClassNames} {...rest}>{text || children}</TypeAsComponent>
  );
}

export default Title;
export { Title };
