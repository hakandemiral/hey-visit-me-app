import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as Icons from '../../Icons';

const Button = styled.button(({
  theme, badge,
}) => css`
  display: grid;
  position: relative;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${theme.colors.paper};
  color: ${theme.colors.borderDivider};
  filter: ${theme.filters.softShadow};
  cursor: pointer;
  
  svg {
    font-size: 1.5rem;
  }
  
  ${badge && css`
    &::after {
      display: grid;
      place-items: center;
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      content: '${badge}';
      background-color: ${theme.colors.red};
      border: 0.1rem solid ${theme.colors.background};
      border-radius: 999px;
      padding: 0.1rem 0.2rem;
      color: ${theme.colors.white};
      font-size: 0.8rem;
      font-weight: 600;
      min-width: 12px;
    }
  `}
`);

const IconedButtons = ({
  icon, badge, ...props
}) => (
  <Button
    badge={badge}
    {...props}
  >
    { Icons[icon]() }
  </Button>
);

IconedButtons.propTypes = {
  icon: propTypes.string.isRequired,
  badge: propTypes.number,
};

IconedButtons.defaultProps = {
  badge: 0,
};

export default IconedButtons;
