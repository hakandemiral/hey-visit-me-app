import React from 'react';
import styled, { css } from 'styled-components';

export default styled.div(({
  theme,
}) => css`
  display: none;
  position: absolute;
  border: solid 0.05rem ${theme.colors.borderDivider};
  border-radius: 0.5rem;
  top: 100%;
  right: -50%;
  cursor: default;
  background: ${theme.colors.dropDown10};
  backdrop-filter: blur(5px);
`);
