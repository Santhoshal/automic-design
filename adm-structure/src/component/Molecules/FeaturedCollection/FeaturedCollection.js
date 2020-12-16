import * as  React from 'react';
import Title from '../../Atoms/Title/Title'
import Image from "../../Atoms/Image/Image"
import './FeaturedCollection.css';

const FeaturedCollection=(props)=> {
  const { data = [], className = '' } = props;
  const renderListItem = (itemProps, index) => {
    return <Image src={itemProps} key={`image-${className}-${index}`} altText={`image-${className}-${index}`}  />;
  };
  return (
      <>
       <div className="featured--collection--heading">
       <Title className="featured--collection--heading" text="Featured Collections"/>
        </div>
    <div className={`featured--collection--imglist`}>
    {data && data.map(renderListItem)}
  </div>
  </>
  );
}

export default FeaturedCollection;
export { FeaturedCollection}



// import * as  React from 'react';
// import { SwiperSlide } from 'swiper/react';
// import Title from '../../Atoms/Title/Title'
// import Image from "../../Atoms/Image/Image"
// import './FeaturedCollection.css';

// function FeaturedCollection(props) {
//   const { data = [], className = '', isSwiperSlide = false } = props;

//   const renderImage = (item,index) => (isSwiperSlide
//     ? (
//       <SwiperSlide key={`image-${className}-${index}`}>
//         <Image src={item} key={`image-${className}-${index}`} altText={`image-${className}-${index}`} />
//       </SwiperSlide>
//     )
//     : <Image src={item} key={`image-${className}-${index}`} altText={`image-${className}-${index}`} />);

//   return (
//     <>
//     <div className={`featured--collection--imglist`}>
//     {data && data.map(renderImage)}
//         </div>
//         </>
//   );
// }

// export default FeaturedCollection;
// export { FeaturedCollection };
