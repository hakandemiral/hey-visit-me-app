import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

import { setClose } from '../../../../features/dialog/dialogSlice';
import Button from '../../Inputs/Button';

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
  align-items: center;

  button:nth-child(1) {
    margin-right: 1rem;
  }

  @media screen and (max-width: 320px) {
    height: 3rem;
    button {
      padding: 0.5rem;
    }
  }
`);

const DialogFooter = ({ actionButtonText }) => {
  const dispatch = useDispatch();

  return (
    <Footer className="dialog-action-buttons">
      <Button onClick={() => dispatch(setClose())} text="Cancel" />
      <Button text={actionButtonText} variant="primary" type="submit" />
    </Footer>
  );
};

DialogFooter.propTypes = {
  actionButtonText: propTypes.string,
};

DialogFooter.defaultProps = {
  actionButtonText: 'Send',
};

export default DialogFooter;
