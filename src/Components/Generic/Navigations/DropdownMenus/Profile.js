import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import profilePhoto from '../../../../Images/Photos/profile-picture.png';
import * as Icons from '../../../Icons';
import DropDownBase from './DropDownBase';

const DropDown = styled(DropDownBase)(({
  theme,
}) => css`
  .top {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: solid 1px ${theme.colors.borderDivider};
    
    img {
      width: 4.25rem;
      height: 4.25rem;
      margin-right: 1rem;
    }
    
    .text {
      display: block;
      width: 150px;
      
      .name {
        color: ${theme.colors.brand};
        font: ${theme.typography.body.regular16};
      }
      
      a {
        color: ${theme.colors.bodyText};
        font: ${theme.typography.body.regular16};
      }
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    
    .item {
      margin: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.bodyText};
      font: ${theme.typography.body.regular16};
      cursor: pointer;

      svg {
        color: ${theme.colors.borderDivider};
        margin-right: 0.8rem;
      }
      
      &:hover {
        color: ${theme.colors.brand};
        
        svg {
          color: inherit;
        }
      }
    }
  }
`);

const Profile = () => (
  <DropDown id="dropdown">
    <div className="top">
      <img src={profilePhoto} alt="Profile" />
      <div className="text">
        <div className="name">Gülsüm Yaşar</div>
        <Link to="/profile">View profile</Link>
      </div>
    </div>
    <div className="links">
      <Link className="item" to="/settings">
        <Icons.Cog />
        <span>Settings</span>
      </Link>
      <a className="item">
        <Icons.LogOut />
        <span>Log out</span>
      </a>
    </div>
  </DropDown>
);

export default Profile;
