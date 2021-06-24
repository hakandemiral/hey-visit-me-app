import React from 'react';
import styled, { css } from 'styled-components';
import DropDownBase from './DropDownBase';
import { Bell } from '../../../Icons';

const Wrapper = styled(DropDownBase)(({
  theme,
}) => css`
  width: 250px;
  min-height: 300px;
  padding: 2rem;
  font: ${theme.typography.body.regular16};
  color: ${theme.colors.heading};
  
  .title {
    margin-bottom: 2rem;
  }
  
  svg {
    color: ${theme.colors.brand};
    margin-bottom: 1rem;
  }
  
`);

const Notification = () => (
  <Wrapper id="dropdown">
    <div className="title">Notifications</div>
    <Bell />
    <div className="message">
      Receive important informations, updates and announcements.
    </div>
  </Wrapper>
);

export default Notification;
