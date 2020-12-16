import * as React from 'react';
import { Title } from './Title';


export default {
  title: 'Atoms/Title',
  component: Title,
};

const Template  = (args) => <Title {...args} />;

export const Link1 = Template.bind({});
Link1.args = {
  text: 'Sample text',
};


