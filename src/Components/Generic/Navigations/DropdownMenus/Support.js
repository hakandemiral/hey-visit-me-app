import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import * as Icons from '../../../Icons';
import DropDownBase from './DropDownBase';

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
`);

const Support = () => (
  <List id="dropdown">
    <LinkItem>
      <Icons.QuestionMarkCircle />
      <span>Help</span>
    </LinkItem>
    <LinkItem>
      <Icons.YellowStar />
      <span>Give Feedback</span>
    </LinkItem>
    <LinkItem>
      <Icons.PencilAlt />
      <span>Contact Us</span>
    </LinkItem>
    <LinkItem>
      <Icons.ShieldCheck />
      <span>Privacy & Terms</span>
    </LinkItem>
  </List>
);

export default Support;
