import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../../Components/Generic/Inputs/Button';

test('button must be rendered in every variant', () => {
  const buttonText = 'Test Button';

  render(<Button
    variant="primary"
    text={buttonText}
  />);

  // const button = screen.getByRole('button');
  //
  // expect(button).toHaveTextContent(buttonText);
  // expect(button).not.toHaveAttribute('disabled');
});
