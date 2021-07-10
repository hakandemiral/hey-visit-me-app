import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Bounce = keyframes`
  0%, 50%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.6);
  }
  75% {
    transform: scale(1.4);
  }
`;

const Screen = styled.div(({ theme }) => css`
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.paper};
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 153, 212, 0) calc(15% + 100px), rgba(0, 99, 138, 0) calc(85% + 100px), rgba(0, 0, 0, 0.15) 100%);
`);

const Container = styled.div(({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 3vw;
    height: 3vw;
    border-radius: 100%;
    margin: 2vw;
    background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    animation: ${Bounce} 1.5s 0.5s linear infinite;
  }

  .yellow {
    background-color: #feb60a;
  }

  .red {
    background-color: #ff0062;
    animation-delay: 0.1s;
  }

  .blue {
    background-color: #00dbf9;
    animation-delay: 0.2s;
  }

  .violet {
    background-color: #da00f7;
    animation-delay: 0.3s;
  }
`);

const LoadingScreen = () => (
  <Screen>
    <Container>
      <div className="yellow" />
      <div className="red" />
      <div className="blue" />
      <div className="violet" />
    </Container>
  </Screen>
);

export default LoadingScreen;
