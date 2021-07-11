import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import * as Icons from '../../Icons';

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const Button = styled.button(({
  theme, size, variant, icon, text,
}) => css`
  /* Generic */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font: ${theme.typography.body.medium16};
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  /* Primary Type */
  ${variant === 'primary' && css`
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
  ${variant === 'secondary' && css`
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
      
      /* Only Icon */
      ${text && css`
        margin-right: 0.5rem;
      `}
    }
  `}
  
  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.dialogBackground};
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    cursor: not-allowed;
    
    span {
      animation: ${loadingAnimation} 1s linear infinite;
    }
  }
`);

const ButtonComponent = ({
  text, variant, size, disabled, icon, loading, ...props
}) => (
  <Button
    variant={variant}
    size={size}
    disabled={disabled || loading}
    icon={Boolean(icon)}
    text={text}
    {...props}
    className="hey-button"
  >
    { loading && <div className="loading"><span>👋</span></div>}
    {icon && Icons[icon]()}
    {text}
  </Button>
);

ButtonComponent.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['little', 'long', 'short']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  text: '',
  variant: 'secondary',
  size: 'long',
  disabled: false,
  icon: '',
  loading: false,
};

export default ButtonComponent;
