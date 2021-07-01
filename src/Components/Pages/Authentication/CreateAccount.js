import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import BasePage from './BasePage';
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
  
  .agree {
    margin-top: 1rem;
    color: ${theme.colors.bodyText};
    font: ${theme.typography.body.regular12};
    
    span {
      cursor: pointer;
      font: ${theme.typography.body.semibold12};
      margin-left: 0.2rem;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 2rem 1rem;
    
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

const CreateAccount = () => {
  return (
    <BasePage>
      <Wrapper>
        <h2>Create your Heyvisit.me Account</h2>
        <h3>
          Have an account?
          <Link to="/sign-in">Sign in</Link>
        </h3>

        <span>Sign up with ...</span>
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
          name="fullName"
          placeholder="Full name"
        />

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

        <div className="agree">
          By signing up, you agree to our Terms,
          <span>Privacy Policy</span>
          .
        </div>
      </Wrapper>
    </BasePage>
  );
};

export default CreateAccount;
