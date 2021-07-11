import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theming from '../../Theming/creator.theme';
import 'jest-styled-components';
import TagInput from '../../Components/Generic/Inputs/TagInput';
import themeVariables from '../../Theming/variables.theme';

test('dateRange must be rendered', () => {
  render(<TagInput theme={theming(true)} />);
});
