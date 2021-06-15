import React from 'react';
import styled from 'styled-components';

const Container = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  width: 500px;
  min-height: 400px;
  padding: 25px;
  background-color: ${theme.colors.paper};
  color: ${theme.colors.bodyText};
  font: ${theme.typography.body.regular20};
  
  h1 {
    font: ${theme.typography.heading.regular24};
    color: ${theme.colors.brand};
    align-self: flex-end;
    margin-top: auto;
  };
  
  h2 {
    font: ${theme.typography.body.regular12};
    color: ${theme.colors.brandLight};
  }
`);

const Paper = () => (
  <Container>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut cum debitis ea earum fuga,
    itaque, maxime molestiae natus nobis nulla officia quod ratione rerum
    suscipit veniam voluptatem voluptates. Iste?
    <h1>Hey visit me!</h1>
  </Container>
);

export default Paper;
