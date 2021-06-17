import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as Icons from '../../icons';

const Bar = styled.div(({
  theme,
}) => css`
  display: flex;
  width: 100%;
  height: 3.5rem;
  background-color: ${theme.colors.background};
  padding: 1rem 4rem;
  user-select: none;
`);

const Item = styled.div(({
  theme, active,
}) => css`
  display: flex;
  align-items: center;
  font: ${theme.typography.body.medium16};
  color: ${theme.colors.secondaryText};
  margin-right: 4rem;
  cursor: pointer;
  
  svg {
    color: inherit;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  
  ${active && css`
    color: ${theme.colors.brand};
  `}
`);

const Navbar = ({
  active,
}) => (
  <Bar>
    <Item active={active === 'overview'}>
      <Icons.Document />
      Overview
    </Item>
    <Item active={active === 'home'}>
      <Icons.Document />
      Home
    </Item>
    <Item active={active === 'drawer'}>
      <Icons.Bell />
      Drawer
    </Item>
  </Bar>
);

Navbar.propTypes = {
  active: propTypes.string.isRequired,
};

Navbar.defaultProps = {
};

export default Navbar;
