import React from 'react';
import DropdownInput from '../Components/Generic/Inputs/DropdownInput';
import getIconNames from '../Helpers/getIconNames';

export default {
  title: 'Drop Down Input',
  compoent: DropdownInput,
  args: {
    placeholder: 'Select One',
    icon: 'Link',
    label: 'Dropdown',
    error: false,
    disabled: false,
    options: [
      { value: 'Test', title: 'Test' },
      { value: 'Test', title: 'Test' },
      { value: 'Test', title: 'Test' },
      { value: 'Test', title: 'Test' },
      { value: 'Test', title: 'Test' },
    ],
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
