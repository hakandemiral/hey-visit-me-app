import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100%;
  
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    .label {
      font: ${theme.typography.body.regular16};
      color: ${theme.colors.heading};
    }
  }
  
  textarea {
    width: 100%;
    height: 10rem;
    border-radius: 0.5rem;
    border: solid 0.8px ${theme.colors.borderDivider};
    background-color: ${theme.colors.paper};
    padding: 1rem;
    color: ${theme.colors.bodyText};
    font: ${theme.typography.body.regular16};
    outline: none;
    resize: none;
    
    &::placeholder {
      color: ${theme.colors.placeholder};
    }
    
    &:focus {
      box-shadow: 0 0 0 0.15rem ${theme.colors.brand};
      border-color: transparent;
    }
  }
`);

const TextArea = ({
  label, placeholder, hookForm,
}) => (
  <Wrapper className="text-area">
    <div className="top">
      { label && <span className="label">{label}</span> }
    </div>
    <textarea placeholder={placeholder && `${placeholder} (max 1000 character)`} {...hookForm} />
  </Wrapper>
);

TextArea.propTypes = {
  label: propTypes.string,
  placeholder: propTypes.string,
  hookForm: propTypes.any,
};

TextArea.defaultProps = {
  label: '',
  placeholder: '',
  hookForm: null,
};

export default TextArea;
