import React, { useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import * as Icons from '../../Icons';

const Bar = styled.div(({
  theme,
}) => css`
  display: flex;
  width: 100%;
  height: 3.5rem;
  background-color: ${theme.colors.background};
  padding: 1rem 4rem;
  user-select: none;

  @media screen and (max-width: 960px) {
    padding: 0;
    justify-content: space-around;
  }
`);

const Item = styled(NavLink)(({
  theme, active,
}) => css`
  display: flex;
  align-items: center;
  font: ${theme.typography.body.medium16};
  color: ${theme.colors.secondaryText};
  margin-right: 4rem;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    color: ${theme.colors.bodyText};
  }
  
  svg {
    color: inherit;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  
  &.active {
    color: ${theme.colors.brand};
    &:hover {
      color: ${theme.colors.brand};
    }
  }

  @media screen and (max-width: 960px) {
    margin: 0;
    flex-direction: column;
    
    svg {
      margin: 0;
    }
  }
`);

const Navbar = () => {
  const { url } = useRouteMatch();

  return (
    <Bar>
      <Item activeClassName="active" to={`${url}/overview`}>
        <Icons.Home />
        Overview
      </Item>
      <Item activeClassName="active" to={`${url}/profile`}>
        <Icons.User />
        Profile
      </Item>
      <Item activeClassName="active" to={`${url}/bussines-card`}>
        <Icons.Identification />
        Business Card
      </Item>
    </Bar>
  );
};

export default Navbar;
