import React from 'react';
import './Template.css';
import { SideMenu } from '../../Organisams/SideMenu/SideMenu'
import ContentArea from '../../Organisams/ContentArea/ContentArea';
function Template1() {
  return (
    <>
    <div className="sidemenu--wrapper">
  <SideMenu/>  
    </div>
    <div className='content--area--wrapper'>
<ContentArea/>
    </div>
    </>
  );
}

export default Template1;
export { Template1 };
