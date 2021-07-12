import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import Button from '../Inputs/Button';

const Footer = styled.div(({
  theme,
}) => css`
  display: flex;
  width: 100%;
  height: 7.5rem;
  padding: 2rem;
  background-color: ${theme.colors.brandMoreLight};
  border-radius: 0 0 1rem 1rem;
  align-items: center;
  
  .actions {
    margin-left: auto;
    display: flex;
    
    button:nth-child(1) {
      margin-right: 1rem;
    }
  }
  
  .message {
    font: ${theme.typography.body.medium14};
    
    &.error{
      color: ${theme.colors.red};
    }
    
    &.success {
      color: ${theme.colors.green};
    }
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .actions {
      margin: 0;
      align-items: center;
      
      .hey-button {
        
      }
    }
    
    .message {
      margin-bottom: 0.75rem;
    }
  }

  @media screen and (max-width: 370px) {
    .actions {
      
      .hey-button {
        padding: 0.5rem 1rem;
      }
    }
  }
  
`);

const FormFooter = ({ message }) => {
  const formPending = useSelector((state) => state.user.formPending);

  return (
    <Footer>
      {message && (
        <div className={`message ${message.type}`}>
          { message.text }
        </div>
      )}
      <div className="actions">
        <Button loading={formPending} text="Reset" type="reset" />
        <Button loading={formPending} text="Save Changes" variant="primary" type="submit" />
      </div>
    </Footer>
  );
};

FormFooter.propTypes = {
  message: propTypes.object,
};

FormFooter.defaultProps = {
  message: null,
};

export default FormFooter;
