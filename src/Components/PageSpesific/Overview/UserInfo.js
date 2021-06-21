import React from 'react';
import styled, { css } from 'styled-components';
import Paper from '../../Layout/Paper';
import ProfilePicture from '../../../Images/Photos/profile-picture.png';
import Button from '../../Generic/Inputs/Button';

const Info = styled(Paper)(({
  theme,
}) => css`
  display: flex;
  align-items: center;
  
  img.photo {
    border-radius: 50%;
    max-width: 5.5rem;
    max-height: 5.5rem;
    margin-right: 2rem;
  }
  
  .who {
    .name {
      display: flex;
      margin-bottom: 0.25rem;
      .fullname {
        font: ${theme.typography.body.regular20};
        color: ${theme.colors.heading};
        margin-right: 0.5rem;
      }
      
      .username {
        font: ${theme.typography.body.regular16};
        color: ${theme.colors.secondaryText};
      }
    }
    
    .role {
      font: ${theme.typography.body.regular16};
      color: ${theme.colors.bodyText};
    }
  }
  
  .actions {
    display: flex;
    margin-left: auto;
    
    button:not(:last-child) {
      margin-right: 1rem;
    }
  }
`);

const UserInfo = () => (
  <Info padding="wide">
    <img src={ProfilePicture} alt="User Profile" className="photo" />
    <div className="who">
      <div className="name">
        <div className="fullname">Gülsüm Yaşar</div>
        <span className="username">@gulsumyasar</span>
      </div>
      <div className="role">UI Designer</div>
    </div>
    <div className="actions">
      <Button text="View Profile" icon="Eye" />
      <Button icon="DotsHorizontal" size="short" />
    </div>
  </Info>
);

export default UserInfo;
