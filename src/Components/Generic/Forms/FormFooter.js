import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '../Inputs/Button';

const Footer = styled.div(({
  theme,
}) => css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 7.5rem;
  padding: 2rem;
  background-color: ${theme.colors.brandMoreLight};
  border-radius: 0 0 1rem 1rem;
  
  button:nth-child(1) {
    margin-right: 1rem;
  }
`);

const FormFooter = () => (
  <Footer>
    <Button text="Cancel" type="reset" />
    <Button text="Save Changes" variant="primary" type="submit" />
  </Footer>
);

export default FormFooter;
