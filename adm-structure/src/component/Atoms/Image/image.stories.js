import * as React from 'react';
import { Image } from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Image1 = Template.bind({});
Image1.args = {
  altText: 'image', src: 'https://cdn.zeplin.io/5e583f939b80ce69bc0255b7/assets/C8FFCF8A-5968-4CFF-A85D-CD1D29E139E8.png',
};

export const Image2 = Template.bind({});
Image2.args = {
  altText: 'image', src: 'https://cdn.zeplin.io/5e583f939b80ce69bc0255b7/assets/67E255A0-CD05-4942-80B7-2DC790CA0F12.png',
};
