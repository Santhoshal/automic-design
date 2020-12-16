import React from 'react';
import Image from "../../Atoms/Image/Image";
import Logo from '../../../assets/Images/logo.png'
import './ProfileInfo.css';

function ProfileInfo() {
  return (
    <div className="profile--pic--wrapper">
      <Image  src={Logo} altText="profile--pic" />
    </div>
  );
}

export default ProfileInfo;
export { ProfileInfo };
