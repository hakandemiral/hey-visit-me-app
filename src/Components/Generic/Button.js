import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button(({
  theme, size, type,
}) => css`
  /* Generic */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font: ${theme.typography.body.medium16};
  border: none;
  border-radius: 8px;
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

  /* Small Size */
  ${size === 'small' && css`
    padding: 16px;
  `}
  /* Normal Size */
  ${size === 'normal' && css`
    padding: 16px 32px;
  `}
`);

const ButtonComponent = ({
  text, type, size, disabled,
}) => (
  <Button
    type={type}
    size={size}
    disabled={disabled}
  >
    {text}
  </Button>
);

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'small']),
  disabled: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  type: 'secondary',
  size: 'normal',
  disabled: false,
};

export default ButtonComponent;
