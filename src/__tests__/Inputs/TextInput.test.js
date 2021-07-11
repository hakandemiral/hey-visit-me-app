import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theming from '../../Theming/creator.theme';
import 'jest-styled-components';
import TextInput from '../../Components/Generic/Inputs/TextInput';
import themeVariables from '../../Theming/variables.theme';

test('textInput must be rendered', () => {
  render(<TextInput
    theme={theming(true)}
    name="Test"
  />);

  const inputContainer = screen.queryByRole('div');

  expect(inputContainer);
});

test('textInput should be red on error', () => {
  render(<TextInput
    theme={theming(true)}
    name="test"
    error={{ test: { message: 'Error!' } }}
  />);

  const errorDiv = screen.getByText('Error!');

  expect(errorDiv).toHaveClass('error-message');
});

test('textInput must be writable', () => {
  render(<TextInput
    theme={theming(true)}
    name="test"
    placeholder="Test Input"
  />);

  const input = screen.getByPlaceholderText('Test Input');

  userEvent.type(input, 'test one two three');
  expect(input).toHaveValue('test one two three');
});

test('disabled textInput should not be writable', () => {
  render(<TextInput
    theme={theming(true)}
    name="test"
    placeholder="Test Input"
    disabled
  />);

  const input = screen.getByPlaceholderText('Test Input');

  userEvent.type(input, 'test one two three');
  expect(input).toHaveValue('');
});
