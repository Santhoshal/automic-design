import * as React from 'react'
import Title from '../../Atoms/Title/Title';
import './BannerText.css'
import Heading from '../../Atoms/Heading/Heading';
// import Title from '../../Atoms/Title/Title'
const BannerText=()=>{
    return(
       <>
             <Heading className="bannerText--heading" tagName="h5" text="Playlist Title That Spans Two Lines" />
         <Title className="bannerText--text" text="Short series description that can span two lines and be 80 characters and stuff."/>
        </>
    )
}
export default BannerText;
export { BannerText}