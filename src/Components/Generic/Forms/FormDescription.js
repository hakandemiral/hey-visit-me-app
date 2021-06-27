import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Description = styled.div(({
  theme,
}) => css`
  font: ${theme.typography.body.regular16};
  color: ${theme.colors.bodyText};
  flex: 0 0 25%;
  
  .h3 {
    font: ${theme.typography.body.medium16};
    color: ${theme.colors.heading};
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 1440px) {
    margin-bottom: 1rem;
  }
`);

const FormDescription = ({ children }) => (
  <Description>
    {children}
  </Description>
);

FormDescription.propTypes = {
  children: propTypes.node.isRequired,
};

export default FormDescription;
