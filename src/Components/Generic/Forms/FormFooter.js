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

const FormFooter = ({ loading }) => (
  <Footer>
    <Button loading={loading} text="Reset" type="reset" />
    <Button loading={loading} text="Save Changes" variant="primary" type="submit" />
  </Footer>
);

FormFooter.propTypes = {
  loading: propTypes.bool,
};

FormFooter.defaultProps = {
  loading: false,
};

export default FormFooter;
