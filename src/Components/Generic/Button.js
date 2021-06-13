import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as Icons from '../icons';

const Button = styled.button(({
  theme, size, type, icon,
}) => css`
  /* Generic */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font: ${theme.typography.body.medium16};
  border: none;
  cursor: pointer;

  /* Primary Type */
  ${type === 'primary' && css`
    background-color: ${theme.colors.brand};
    color: ${theme.colors.white};

    &:hover {
      filter: ${theme.filters.softShadow};
    };

    &:disabled {
      background-color: ${theme.colors.brandDisabled};
      color: ${theme.colors.white};
      cursor: not-allowed;
      filter: none;
    }
  `}

  /* Secondary Type */
  ${type === 'secondary' && css`
    background-color: ${theme.colors.paper};
    color: ${theme.colors.brand};
    border: solid 0.8px ${theme.colors.brand};

    &:hover {
      background-color: ${theme.colors.brandMoreLight};
      filter: ${theme.filters.softShadow};
    };

    &:disabled {
      color: ${theme.colors.borderDivider};
      border-color: ${theme.colors.borderDivider};
      cursor: not-allowed;
      filter: none;
      background-color: ${theme.colors.paper};
    }
  `}

  /* Little Size */
  ${size === 'little' && css`
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  `}
  /* Short Size */
  ${size === 'short' && css`
    padding: 1rem;
    border-radius: 0.5rem;
  `}
  /* Long Size */
  ${size === 'long' && css`
    padding: 1rem 2rem;
    border-radius: 0.5rem;
  `}
  
  /* With Icon */
  ${icon && css`
    svg {
      color: inherit;
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  `}
`);

const ButtonComponent = ({
  text, type, size, disabled, icon,
}) => (
  <Button
    type={type}
    size={size}
    disabled={disabled}
    icon={Boolean(icon)}
  >
    {icon && Icons[icon]()}
    {text}
  </Button>
);

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['little', 'long', 'short']),
  disabled: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  type: 'secondary',
  size: 'long',
  disabled: false,
  icon: '',
};

export default ButtonComponent;
