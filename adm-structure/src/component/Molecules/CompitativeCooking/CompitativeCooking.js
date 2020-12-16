import * as  React from 'react';
import Title from '../../Atoms/Title/Title'
import Image from "../../Atoms/Image/Image"
import './CompitativeCooking.css';

const CompitativeCooking=(props)=> {
  const { data = [], className = '' } = props;
  const renderListItem = (itemProps, index) => {
    return <Image src={itemProps} key={`image-${className}-${index}`} altText={`image-${className}-${index}`}  />;
  };
  return (
      <>
       <div className="compitative--cooking--heading">
       <Title className="compitative--cooking--heading" text="Competitive Cooking"/>
        </div>
    <div className={`compitative--cooking--imglist`}>
    {data && data.map(renderListItem)}
  </div>
  </>
  );
}

export default CompitativeCooking;
export { CompitativeCooking}


