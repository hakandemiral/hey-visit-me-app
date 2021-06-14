import React from 'react';
import DropdownInput from '../Components/Generic/Inputs/DropdownInput';
import getIconNames from '../Helpers/getIconNames';

export default {
  title: 'Drop Down Input',
  compoent: DropdownInput,
  args: {
    placeholder: 'City',
    icon: 'Location',
    label: 'Dropdown',
    error: false,
    disabled: false,
    options: ['Facebook', 'Dribble', 'Figma', 'Instagram'],
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: getIconNames(),
      },
    },
  },
};

export const Input = DropdownInput;
