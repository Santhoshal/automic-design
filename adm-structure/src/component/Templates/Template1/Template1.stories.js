import * as React from 'react';
import { Template1 } from './Template1';

export default {
  title: 'Templates/Template1',
  component: Template1,
};

const Template  = () => <Template1 />;

export const TemplateOne = Template.bind({});
TemplateOne.args = {};
