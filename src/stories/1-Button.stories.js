import React from 'react';
import Button from '../Components/Generic/Button';
import * as Icons from '../Components/icons';

export default {
  title: 'Buttons',
  component: Button,
  args: {
    text: 'Your text is here',
    type: 'primary',
    size: 'long',
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(Icons),
      },
    },
  },
};

export const Secondary = Button.bind({});
