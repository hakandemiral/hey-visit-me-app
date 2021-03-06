import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setDark, setLight } from '../../features/theme/themeSlice';
import * as Icons from '../Icons';

const Box = styled.div(({
  theme,
}) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
  background-color: ${theme.colors.background};
  border: 0.05rem solid ${theme.colors.borderDivider};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`);

const Option = styled.div(({
  theme, active,
}) => css`
  display: grid;
  place-items: center;
  border-radius: 0.25rem;
  color: ${theme.colors.borderDivider};
  cursor: pointer;
  padding: 0.5rem 1rem;
  
  svg {
    color: inherit;
    font-size: 1.5rem;
  }
  
  ${active && css`
    background-color: ${theme.colors.paper};

    &.light svg {
      color: ${theme.colors.yellow} !important;
    }

    &.dark svg {
      color: ${theme.colors.brand} !important;
    }
  `}
`);

const ThemeSwitch = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <Box className="theme-switch">
      <Option
        className="light"
        active={!isDark}
        onClick={() => isDark && dispatch(setLight())}
      >
        <Icons.Sun />
      </Option>
      <Option
        className="dark"
        active={isDark}
        onClick={() => !isDark && dispatch(setDark())}
      >
        <Icons.Moon />
      </Option>
    </Box>
  );
};

export default ThemeSwitch;
