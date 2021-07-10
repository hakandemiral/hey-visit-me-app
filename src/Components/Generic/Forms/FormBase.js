import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import FormFooter from './FormFooter';

const Form = styled.form(({
  theme,
}) => css`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  flex: 0 0 70%;
`);

const InputArea = styled.div(({
  theme,
}) => css`
  width: 100%;
  height: 100%;
  padding: 4rem;
  background-color: ${theme.colors.paper};
  border-radius: 1rem 1rem 0 0;

  @media screen and (max-width: 576px) {
    padding: 2rem 0;
  }

  @media screen and (max-width: 420px) {
    padding: 2rem 0;
  }
`);

const FormBase = ({
  children, message, ...props
}) => (
  <Form {...props}>
    <InputArea>
      {children}
    </InputArea>
    <FormFooter message={message} />
  </Form>
);

FormBase.propTypes = {
  children: propTypes.node.isRequired,
  message: propTypes.object,
};

FormBase.defaultProps = {
  message: null,
};

export default FormBase;
