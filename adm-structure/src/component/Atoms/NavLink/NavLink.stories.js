import * as React from 'react';
import { NavLink } from './NavLink';

export default {
  title: 'Atoms/NavLink',
  component: NavLink,
};

const Template  = (args) => <NavLink {...args} />;

export const Link1 = Template.bind({});
Link1.args = {
  url: '/mylist', text: 'MyList',
};

export const Link2 = Template.bind({});
Link2.args = {
  url: '/browse', text: 'Browse', 
};
