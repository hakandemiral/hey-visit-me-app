import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import GirlVector from './assets/GirlVector.svg';
import CircleWave from '../Landing/assets/CircleWave.svg';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100vw;
  height: 100vh;
  ${theme.colors.authPageGraient}
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  .form {
    max-width: 480px;
    background-color: ${theme.colors.paper};
    border-radius: 1rem;
  }
  
  .images {
    position: relative;
    width: 570px;
    height: 570px;
    
    img {
      position: absolute;
      -webkit-user-drag: none;
    }
    
    .circle {
      top: 0;
      left: 0;
    }
    
    .girl {
      bottom: 0;
      right: 0;
    }
  }
  
  @media screen and (max-width: 1200px) {
    .images {
      display: none;
    }
    
  }
`);

const AuthBasePage = ({ action }) => {
  return (
    <Wrapper>
      <div className="form">
        { action === 'signIn' && <SignIn /> }
        { action === 'signUp' && <CreateAccount /> }
      </div>

      <div className="images">
        <img className="circle" src={CircleWave} alt="Vector" />
        <img className="girl" src={GirlVector} alt="Vector" />
      </div>
    </Wrapper>
  );
};

AuthBasePage.propTypes = {
  action: propTypes.oneOf(['signIn', 'signUp']).isRequired,
};

export default AuthBasePage;
