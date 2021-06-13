import React from 'react';
import TextInput from '../Components/Generic/Inputs/TextInput';
import * as Icons from '../Components/icons';
import getIconNames from '../Helpers/getIconNames';

export default {
  title: 'Input',
  component: TextInput,
  args: {
    placeholder: 'Your text is here',
    label: 'secondary',
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

export const Input = TextInput;
