import * as React from 'react';
import ProfileInfo from '../../Molecules/ProfileInfo/ProfileInfo';
import LinkList from '../../Molecules/LinkList/LinkList';
import {navMenuData} from '../../../assets/Data/SideMenuData'
import './SideMenu.css';



const SideMenu=() =>{
  return (
   <>
<ProfileInfo/>
  <div className="side--wrapper1">
  <LinkList data={navMenuData} className="molecule--sideMenu"/>
  </div>
      </>
  );
}

export default  SideMenu;
export {  SideMenu };
