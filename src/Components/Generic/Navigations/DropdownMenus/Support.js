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
  
  &:hover {
    svg, span {
      color: ${theme.colors.brand};
    }
  }
`);

const Support = () => (
  <List id="dropdown">
    <LinkItem to="/help">
      <Icons.QuestionMarkCircle />
      <span>Help</span>
    </LinkItem>
    <LinkItem to="#">
      <Icons.YellowStar />
      <span>Give Feedback</span>
    </LinkItem>
    <LinkItem to="#">
      <Icons.PencilAlt />
      <span>Contact Us</span>
    </LinkItem>
    <LinkItem to="#">
      <Icons.ShieldCheck />
      <span>Privacy & Terms</span>
    </LinkItem>
  </List>
);

export default Support;
