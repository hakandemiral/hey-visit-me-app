import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import * as Icons from '../../icons';

const InputArea = styled.div(({
  theme, label, disabled, error, icon, prefix,
}) => css`
  /* Generic */
  width: 26rem;
  height: 5.5rem;
  
  ${label && css`
    & span.label {
      display: inline-block;
      margin-bottom: 0.35rem;
      color: ${theme.colors.heading};
      font: ${theme.typography.body.regular16};
    }
  `}
  
  .box {
    width: 100%;
    height: 3.5rem;
    background-color: ${theme.colors.paper};
    border: solid 0.05rem ${theme.colors.borderDivider};
    border-radius: 0.5rem;
    position: relative;
    transition: 100ms color, 100ms box-shadow;
    overflow: hidden;
    
    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      padding: 1rem;
      color: ${theme.colors.bodyText};
      font: inherit;
      cursor: inherit;
      
      /* If Iconed */
      ${icon && css`
        padding: 1rem 3rem !important;
      `}
      
      &::placeholder {
        color: ${theme.colors.placeholder};
      }
    }

    ${!error && css`
      &:focus-within {
        box-shadow: 0 0 0 0.15rem ${theme.colors.brand};
        border-color: transparent;

        svg {
          color: ${theme.colors.brand};
        }
      }
    `}
    
    &:hover {
      filter: ${theme.filters.softShadow};
    }
    
    /* If prefixed */
    ${prefix && css`
      span.prefix {
        position: absolute;
        width: ${prefix.length / 1.5}rem;
        height: 100%;
        display: grid;
        place-items: center;
        background-color: ${theme.colors.background};
      }
      
      input {
        padding: 1rem 1rem 1rem ${prefix.length / 1.4}rem !important;
      }
    `}
    
    ${error && css`
      box-shadow: 0 0 0 0.15rem ${theme.colors.red};
      border-color: transparent;

      svg {
        color: ${theme.colors.red} !important;
      }
    `}
    
    svg{
      position: absolute;
      font-size: 1.5rem;
      color: ${theme.colors.borderDivider};
      margin: 1rem;
    }
  }

  /* Disabled */
  ${disabled && css`
    cursor: not-allowed;
    
    .box {
      &:hover {
        filter: none;
      }
    }
  `}
`);

const TextInput = ({
  placeholder, label, icon, error, type, prefix, disabled,
}) => (
  <InputArea
    label={label}
    error={error}
    icon={Boolean(icon)}
    prefix={prefix}
    disabled={disabled}
  >
    { label && <span className="label">{label}</span> }
    <div className="box">
      { icon && Icons[icon]() }
      { prefix && <span className="prefix">{prefix}</span> }
      <input type={type} name="aa" placeholder={placeholder} disabled={disabled} />
    </div>
  </InputArea>
);

TextInput.propTypes = {
  placeholder: propTypes.string,
  label: propTypes.string,
  icon: propTypes.string,
  error: propTypes.bool,
  type: propTypes.oneOf(['email', 'password', 'text', 'password']),
  prefix: propTypes.string,
  disabled: propTypes.bool,
};

TextInput.defaultProps = {
  placeholder: '',
  label: '',
  icon: '',
  error: false,
  type: 'text',
  prefix: '',
  disabled: false,
};

export default TextInput;
