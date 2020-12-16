import * as React from 'react';
import { Heading } from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  tagName: 'h3', text: 'Playlist Title',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  tagName: 'h4', text: 'Featured Collections',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  tagName: 'h4', text: 'Competitive Cooking',
};
