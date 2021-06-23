import React from 'react';
import styled, { css } from 'styled-components';
import Container from '../../Layout/Container';
import UserInfo from './UserInfo';
import CardPreview from './CardPreview';
import ViewCounter from './ViewCounter';
import Filter from './Filter';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 3rem;
  
  .left {
    flex: 1 0 65%;
    
    &>* {
      margin: 1rem;
    }
  }

  .right {
    flex: 1 0 30%;
    &>* {
      
      margin: 1rem;
    }
  }
  
  @media screen and (max-width: 1440px) {
    flex-direction: column;
  }
  
`);

const Statistics = () => (
  <Container>
    <Wrapper>
      <div className="left">
        <UserInfo />
        <CardPreview />
      </div>
      <div className="right">
        <Filter />
        <ViewCounter />
        <ViewCounter />
      </div>
    </Wrapper>
  </Container>
);

export default Statistics;
