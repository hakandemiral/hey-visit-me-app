import React from 'react';
import styled, { css } from 'styled-components';
import IconedButton from '../Generic/Inputs/IconedButton';
import Container from '../Layout/Container';
import ThemeSwitch from '../Generic/ThemeSwitch';
import Navbar from '../Generic/Navigations/Navbar';

const Wrapper = styled.div(({
  theme,
}) => css`
  border-bottom: 0.065rem solid ${theme.colors.borderDivider};
`);

const Top = styled.div(({
  theme,
}) => css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4rem 0;
  
  button:not(:last-child) {
    margin-right: 2rem;
  }
`);

const Header = () => (
  <Wrapper>
    <Container>
      <Top>
        <IconedButton icon="Bell" badge={8} />
        <IconedButton icon="Support" />
        <IconedButton icon="User" />
        <ThemeSwitch />
      </Top>
      <Navbar />
    </Container>
  </Wrapper>
);

export default Header;
