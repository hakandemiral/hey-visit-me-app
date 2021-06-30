import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Icons from '../../../Icons';
import DropDownBase from './DropDownBase';
import { setOpen } from '../../../../features/dialog/dialogSlice';
import { CONTACT_US, GIVE_FEEDBACK } from '../../Dialogs/DialogTypes';

const List = styled(DropDownBase)(({
  theme,
}) => css`
  padding: 2rem 1rem;
`);

const LinkItem = styled(Link)(({
  theme,
}) => css`
  display: flex;
  align-items: center;
  width: 200px;
  
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  svg {
    margin-right: 0.5rem;
    color: ${theme.colors.borderDivider};
    font-size: 1.5rem;
  }
  
  span {
    font: ${theme.typography.body.regular16};
    color: ${theme.colors.bodyText};
  }
  
  &:hover {
    svg, span {
      color: ${theme.colors.brand};
    }
  }
`);

const Support = () => {
  const dispatch = useDispatch();

  return (
    <List id="dropdown">
      <LinkItem to="/help">
        <Icons.QuestionMarkCircle />
        <span>Help</span>
      </LinkItem>
      <LinkItem to="#" onClick={() => dispatch(setOpen(GIVE_FEEDBACK))}>
        <Icons.YellowStar />
        <span>Give Feedback</span>
      </LinkItem>
      <LinkItem to="#" onClick={() => dispatch(setOpen(CONTACT_US))}>
        <Icons.PencilAlt />
        <span>Contact Us</span>
      </LinkItem>
      <LinkItem to="/privacy-policy">
        <Icons.ShieldCheck />
        <span>Privacy Policy</span>
      </LinkItem>
    </List>
  );
};

export default Support;
