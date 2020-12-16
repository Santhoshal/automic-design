import * as React from 'react';
import SideMenu from './SideMenu';

export default {
  title: 'Organisams/NavMenu',
  component: SideMenu,
};

const Template  = () => <SideMenu />;

export const sideMenuContent = Template.bind({});
sideMenuContent.args = {};
