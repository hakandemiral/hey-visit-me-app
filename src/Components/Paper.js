import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  min-height: 400px;
  margin: auto;
  padding: 25px;
  background-color: ${({ theme }) => theme.paper};
  color: ${({ theme }) => theme.bodyText};
  font: ${({ theme }) => theme.bodies.regular20};
  
  h1 {
    font: ${({ theme }) => theme.headings.regular24};
    color: ${({ theme }) => theme.brand};
    align-self: flex-end;
    margin-top: auto;
  };
  
  h2 {
    font: ${({ theme }) => theme.bodies.regular12};
    color: ${({ theme }) => theme.brandLight};
  }
`;

const Paper = () => (
  <Container>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut cum debitis ea earum fuga,
    itaque, maxime molestiae natus nobis nulla officia quod ratione rerum
    suscipit veniam voluptatem voluptates. Iste?
    <h1>Hey visit me!</h1>
  </Container>
);

export default Paper;
