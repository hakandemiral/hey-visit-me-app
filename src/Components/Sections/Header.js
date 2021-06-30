import React from 'react';
import styled, { css } from 'styled-components';
import IconedButton from '../Generic/Inputs/IconedButton';
import Container from '../Layout/Container';
import ThemeSwitch from '../Generic/ThemeSwitch';
import Navbar from '../Generic/Navigations/Navbar';

/* Dropdown Components */
import ProfileDropDown from '../Generic/Navigations/DropdownMenus/Profile';
import SupportDropDown from '../Generic/Navigations/DropdownMenus/Support';
import NotificationDropDown from '../Generic/Navigations/DropdownMenus/Notification';

const Wrapper = styled.div(({
  theme,
}) => css`
  border-bottom: 0.065rem solid ${theme.colors.borderDivider};
  z-index: -100;
  margin-bottom: 4rem;
  
  @media screen and (max-width: )
`);

const Top = styled.div(({
  theme,
}) => css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4rem 0;
  
  .iconed-buttons {
    display: flex;
    flex-direction: row;
    
    button:not(:last-child) {
      margin-right: 2rem;
    }
  }
  
  .theme-switch {
    margin-right: 1rem;
  }
  
  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 0;

    button {
      margin: 0 1rem;
    }
  }

  @media screen and (max-width: 580px) {
    .theme-switch {
      margin: 0 0 1rem 0;
    }
  }
`);

const IconedButtonExt = styled(IconedButton)`
  z-index: 99;
  &:hover #dropdown {
    display: block;
  }
`;

const Header = () => (
  <Wrapper>
    <Container>
      <Top>
        <ThemeSwitch />
        <div className="iconed-buttons">
          <IconedButtonExt icon="Bell" badge={8}>
            <NotificationDropDown />
          </IconedButtonExt>
          <IconedButtonExt icon="Support">
            <SupportDropDown />
          </IconedButtonExt>
          <IconedButtonExt icon="User">
            <ProfileDropDown />
          </IconedButtonExt>
        </div>
      </Top>
      <Navbar />
    </Container>
  </Wrapper>
);

export default Header;
