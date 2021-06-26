import React from 'react';
import Button from '../Components/Generic/Inputs/Button';
import getIconNames from '../Helpers/getIconNames';

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'Your text is here',
    variant: 'secondary',
    size: 'long',
  },
  argTypes: {
    icon: {
      control: {
        variant: 'select',
        options: getIconNames(),
      },
    },
  },
};

export const Secondary = Button;
