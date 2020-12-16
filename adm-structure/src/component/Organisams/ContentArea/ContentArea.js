import * as React from 'react';
import LinkList from "../../Molecules/LinkList/LinkList"
import {headerMenuData} from "../../../assets/Data/HeaderMenu"
import {featutedCollection, compitativeCooking} from "../../../assets/Data/PageData"
import './ContentArea.css'
import BannerText from '../../Molecules/BannerText/BannerText';
import FeaturedCollection from '../../Molecules/FeaturedCollection/FeaturedCollection';
import CompitativeCooking from '../../Molecules/CompitativeCooking/CompitativeCooking'
const ContentArea=()=>{
    return(
        <div className="content--area">
            <div className="banner--section">
  <LinkList data={headerMenuData} className="header--Menu"/>
  <BannerText/>
  </div>
  <div className="featured--collection--wrapper">
      <FeaturedCollection data={featutedCollection} className="image--list"/>
  </div>
  <div className="compitative--cooking--wrapper">
      <CompitativeCooking data={compitativeCooking} className="image--list"/>
  </div>
        </div>
    )
}
export default ContentArea;
export { ContentArea }