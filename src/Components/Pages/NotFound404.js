import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Generic/Inputs/Button';
import ImageOf404 from '../../Images/Photos/404.svg';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.paper};
  
  h1 {
    color: ${theme.colors.brand};
    font: ${theme.typography.heading.medium32};
  }
  
  p {
    color: ${theme.colors.bodyText};
    font: ${theme.typography.body.regular16};
  }
  
`);

const NotFound404 = () => (
  <Wrapper>
    <h1>Page Not Found</h1>
    <p>
      Oh, no! We can’t find the page that you’re looking for.
      Please check the web address and try again.
    </p>
    <img src={ImageOf404} alt="404" />
    <Link to="/"><Button text="Back To Homepage" variant="primary" /></Link>
  </Wrapper>
);

export default NotFound404;
