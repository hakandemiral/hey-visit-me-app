import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropdownInput from '../../Components/Generic/Inputs/DropdownInput';
import theming from '../../Theming/creator.theme';

test('dropDownInput should be render', () => {
  render(<DropdownInput
    theme={theming(true)}
    name="test-drop-down"
    placeholder="Test Placeholder"
    label="Test Label"
    options={[
      { value: 'Test1', title: 'Test1' },
      { value: 'Test2', title: 'Test2' },
    ]}
  />);

  const dropDown = screen.getByTestId('drop-down-input');

  expect(dropDown.querySelector('.label')).toHaveClass('label');
  expect(dropDown.querySelector('.label')).toHaveTextContent('Test Label');
  expect(dropDown.querySelector('button.box')).toHaveTextContent('Test Placeholder');
  expect(dropDown.querySelector('.list')).toHaveClass('hidden');
});

test('dropDownInput options should toggle', () => {
  render(<DropdownInput
    theme={theming(true)}
    name="test-drop-down"
    placeholder="Test Placeholder"
    label="Test Label"
    options={[
      { value: 'Test1', title: 'Test1' },
      { value: 'Test2', title: 'Test2' },
    ]}
  />);

  const dropDown = screen.getByTestId('drop-down-input');

  expect(dropDown.querySelector('.list')).toHaveClass('hidden');

  userEvent.click(dropDown.querySelector('button.box'));

  expect(dropDown.querySelector('.list')).not.toHaveClass('hidden');
});

test('dropDownInput should change when an option is selected', () => {
  render(<DropdownInput
    theme={theming(true)}
    name="test-drop-down"
    placeholder="Test Placeholder"
    label="Test Label"
    options={[
      { value: 'Test1', title: 'Test1' },
      { value: 'Test2', title: 'Test2' },
    ]}
  />);

  const dropDown = screen.getByTestId('drop-down-input');

  expect(dropDown.querySelector('button.box')).toHaveTextContent('Test Placeholder');

  userEvent.click(dropDown.querySelector('button.box'));
  userEvent.click(screen.getByText('Test1'));

  expect(dropDown.querySelector('button.box')).toHaveTextContent('Test1');
});

test('dropDown does not respond when clicked with Input disabled', () => {
  const { debug } = render(<DropdownInput
    theme={theming(true)}
    name="test-drop-down"
    placeholder="Test Placeholder"
    label="Test Label"
    disabled
    options={[
      { value: 'Test1', title: 'Test1' },
      { value: 'Test2', title: 'Test2' },
    ]}
  />);

  const dropDown = screen.getByTestId('drop-down-input');

  expect(dropDown.querySelector('div.list')).toBe(null);

  userEvent.click(dropDown.querySelector('button.box'));

  expect(dropDown.querySelector('div.list')).toBe(null);
});
