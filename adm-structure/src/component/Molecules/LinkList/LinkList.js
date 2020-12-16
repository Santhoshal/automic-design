import React from 'react';
import NavLink from '../../Atoms/NavLink/NavLink';
import './LinkList.css';

const LinkList=(props)=> {
  const { data = [], className = '' } = props;
  const renderListItem = (itemProps, index) => {
    const { text = '', url = '', target = '' } = itemProps;
    return <NavLink target={target} key={`list-item-${index}`} className="linkList--item" text={text} url={url} />;
  };
  return (
    <div className={`molecule--linkList ${className}`}>
    {data && data.map(renderListItem)}
  </div>
  );
}

export default LinkList;
export { LinkList };
