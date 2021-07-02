import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Google, Facebook, Github } from '../../Icons';
import TextInput from '../../Generic/Inputs/TextInput';
import Button from '../../Generic/Inputs/Button';

const Wrapper = styled.form(({
  theme,
}) => css`
  padding: 4rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h2 {
    font: ${theme.typography.heading.regular24};
    color: ${theme.colors.brand};
    margin-bottom: 0.5rem;
  }
  
  h3 {
    font: ${theme.typography.body.regular16};
    color: ${theme.colors.bodyText};
    margin-bottom: 4rem;
    
    a {
      margin-left: 0.25rem;
      font: ${theme.typography.body.medium16};
      text-decoration: underline;
      color: ${theme.colors.brand};
    }
  }
  
  span {
    color: ${theme.colors.bodyText};
    font: ${theme.typography.body.regular16};
    margin-bottom: 1rem;
  }
  
  .login-with {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    button {
      display: grid;
      place-items: center;
      padding: 0.25rem 0;
      width: 30%;
      cursor: pointer;
      border: 0.8px solid ${theme.colors.borderDivider};
      background-color: ${theme.colors.paper};
      border-radius: 0.25rem;
      
      svg {
        color: ${theme.colors.secondaryText};
        font-size: 1.5rem;
      }
    }
  }
  
  .divider {
    width: 100%;
    margin: 2.75rem 0;
    position: relative;
    
    span {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${theme.colors.paper};
      padding: 0 1rem;
    }
  }
  
  .text-input {
    &:not(:last-child){
      margin-bottom: 2rem;
    }
  }
  
  .hey-button {
    width: 100%;
  }
  

  @media screen and (max-width: 500px) {
    padding: 3rem 1rem;
    
    h3 {
      margin-bottom: 1rem;
    }
    
    .divider {
      margin: 1.5rem 0;
    }

    .text-input {
      &:not(:last-child){
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: 320px) {
    padding: 0.5rem;

    h3 {
      margin-bottom: 1rem;
    }

    .divider {
      margin: 1.5rem 0;
    }
  }
`);

const SignIn = () => {
  return (
    <Wrapper>
      <h2>Sign in to your Heyvisit.me account</h2>
      <h3>
        Don’t have an account?
        <Link to="/sign-up">Create an account</Link>
      </h3>

      <span>Sign in with ...</span>
      <div className="login-with">
        <button type="button">
          <Google />
        </button>
        <button type="button">
          <Facebook />
        </button>
        <button type="button">
          <Github />
        </button>
      </div>

      <div className="divider">
        <hr />
        <span>Or</span>
      </div>

      <TextInput
        name="email"
        placeholder="E-mail"
      />

      <TextInput
        type="password"
        name="password"
        placeholder="Password"
      />

      <Button
        text="Create Account"
        variant="primary"
      />
    </Wrapper>
  );
};

export default SignIn;
