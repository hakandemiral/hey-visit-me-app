import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import * as Icons from '../../Icons';

const InputArea = styled.div(({
  theme, label, disabled, error, icon, prefix, description,
}) => css`
  /* Generic */
  width: 100%;
  
  ${label && css`
    & span.label {
      display: inline-block;
      margin-bottom: 0.35rem;
      color: ${theme.colors.heading};
      font: ${theme.typography.body.regular16};
    }
  `}

  ${description && css`
    & span.label {
      margin-bottom: 0.5rem;
    }
    
    & span.description {
      display: block;
      font: ${theme.typography.body.regular12};
      color: ${theme.colors.bodyText};
      margin-bottom: 1rem;
    }
  `}
  
  .error-message {
    color: ${theme.colors.red};
    margin: 0.15rem 0 0 0.35rem;
    font: ${theme.typography.body.medium14};
  }
  
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
        color: ${theme.colors.bodyText};
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
    
    .eye-off {
      position: absolute; 
      top: 0;
      right: 0;
      cursor: pointer;
      user-select: none;
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
  placeholder, label, icon, error, type, prefix, disabled, hookForm, name, description,
  controlledInput, ...props
}) => {
  const [passwordMask, setPasswordMask] = useState(true);

  return (
    <InputArea
      label={label}
      description={Boolean(description)}
      error={Boolean(error[name])}
      icon={icon}
      prefix={prefix}
      disabled={disabled}
      className="text-input"
    >

      { label && <span className="label">{label}</span> }

      { description && <span className="description">{description}</span> }

      <div className="box">

        { icon && Icons[icon]() }

        { prefix && <span className="prefix">{prefix}</span> }

        <input
          type={passwordMask ? type : ''}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onBlur={(e) => controlledInput(e.target.value)}
          {...props}
          {...hookForm}
        />

        { type === 'password'
        && (
          passwordMask
            ? <Icons.Eye onClick={() => setPasswordMask(!passwordMask)} className="eye-off" />
            : <Icons.EyeOff onClick={() => setPasswordMask(!passwordMask)} className="eye-off" />
        )}
      </div>
      <div className="error-message">
        { error[name] && error[name].message }
      </div>
    </InputArea>
  );
};

TextInput.propTypes = {
  placeholder: propTypes.string,
  label: propTypes.string,
  icon: propTypes.string,
  error: propTypes.object,
  type: propTypes.oneOf(['email', 'password', 'text', 'password']),
  prefix: propTypes.string,
  disabled: propTypes.bool,
  hookForm: propTypes.any,
  name: propTypes.string.isRequired,
  description: propTypes.string,
  controlledInput: propTypes.func,
};

TextInput.defaultProps = {
  placeholder: '',
  label: '',
  icon: '',
  error: {},
  type: 'text',
  prefix: null,
  disabled: false,
  hookForm: null,
  description: null,
  controlledInput: () => {},
};

export default TextInput;
