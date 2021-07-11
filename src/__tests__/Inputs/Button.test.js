import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import theming from '../../Theming/creator.theme';
import themeVariables from '../../Theming/variables.theme';
import Button from '../../Components/Generic/Inputs/Button';

test('button must be rendered', () => {
  const buttonText = 'Test Button';

  render(<Button
    theme={theming(true)}
    text={buttonText}
  />);

  const button = screen.getByRole('button');

  expect(button).toHaveTextContent(buttonText);
  expect(button).not.toHaveAttribute('disabled');
});

test('only iconed button must be rendered', () => {
  render(<Button
    theme={theming(true)}
    icon="Bell"
  />);

  const button = screen.getByRole('button');

  expect(button.getElementsByTagName('svg'));
});

test('both iconed and texted button must be rendered', () => {
  const buttonText = 'Test Button';

  render(<Button
    theme={theming(true)}
    text={buttonText}
    icon="Bell"
  />);

  const button = screen.getByRole('button');

  expect(button).toHaveTextContent(buttonText);
  expect(button.getElementsByTagName('svg'));
});

test('primary button variant must be in correct colors', () => {
  render(<Button
    theme={theming(true)}
    variant="primary"
  />);

  const button = screen.getByRole('button');

  expect(button).toHaveStyleRule('background-color', themeVariables.constantColors.brand);
  expect(button).toHaveStyleRule('color', themeVariables.constantColors.white);
  expect(button).toHaveStyleRule('border', 'none');
});

test('secondary button variant must be in correct colors', () => {
  render(<Button
    theme={theming(true)}
    variant="secondary"
  />);

  const button = screen.getByRole('button');

  expect(button).toHaveStyleRule('background-color', themeVariables.darkTheme.paper);
  expect(button).toHaveStyleRule('color', themeVariables.constantColors.brand);
  expect(button).toHaveStyleRule('border', `solid 0.8px ${themeVariables.constantColors.brand}`);
});

test('button should behave correctly in loading state', () => {
  render(<Button
    theme={theming(true)}
    loading
  />);

  const button = screen.getByRole('button');
  const loading = button.firstChild;

  expect(button).toHaveAttribute('disabled');
  expect(loading).toHaveClass('loading');
});
