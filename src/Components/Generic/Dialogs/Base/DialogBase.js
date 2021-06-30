import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DialogFooter from './DialogFooter';

const Wrapper = styled.div(({
  theme,
}) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.dialogBackground};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`);

const FormBox = styled.form(({
  theme,
}) => css`
  display: flex;
  flex-direction: column;

`);

const InputArea = styled.div(({
  theme,
}) => css`
  border-radius: 1rem 1rem 0 0;
  background-color: ${theme.colors.paper};
  padding: 4rem;
  
  @media screen and (max-width: 630px) {
    padding: 2rem;
  }

  @media screen and (max-width: 320px) {
    padding: 1rem;
  }
`);

const DialogBase = ({ children, ...props }) => (
  <Wrapper>
    <FormBox {...props}>
      <InputArea>
        { children }
      </InputArea>
      <DialogFooter actionButtonText="SendRequest" />
    </FormBox>
  </Wrapper>
);

DialogBase.propTypes = {
  children: propTypes.node.isRequired,
};

export default DialogBase;
