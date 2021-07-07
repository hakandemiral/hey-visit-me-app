import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../../features/auth/authSlice';
import * as Icons from '../../../Icons';
import DropDownBase from './DropDownBase';

const DropDown = styled(DropDownBase)(({
  theme, profilePhoto,
}) => css`
  .top {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: solid 1px ${theme.colors.borderDivider};
    
    .photo {
      width: 4.25rem;
      height: 4.25rem;
      margin-right: 1rem;
      background-size: cover;
      background-image: url(${profilePhoto});
      border-radius: 50%;
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

const Profile = () => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  return (
    <DropDown profilePhoto={profile.photo} id="dropdown">
      <div className="top">
        <div className="photo" />
        <div className="text">
          <div className="name">{profile.fullName}</div>
          <Link to={`/${profile.userName}`} target="_blank">View profile</Link>
        </div>
      </div>
      <div className="links">
        <Link className="item" to={`${url}/settings`}>
          <Icons.Cog />
          <span>Settings</span>
        </Link>
        <a className="item" onClick={() => dispatch(logOut())}>
          <Icons.LogOut />
          <span>Log out</span>
        </a>
      </div>
    </DropDown>
  );
};

export default Profile;
