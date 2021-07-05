import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Paper from '../../../Layout/Paper';
import profilePlaceholder from '../../../../Images/Photos/profilePlaceholder.svg';
import Button from '../../../Generic/Inputs/Button';

const Info = styled(Paper)(({
  theme, profilePhoto,
}) => css`
  display: flex;
  align-items: center;
  
  .photo {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    margin-right: 1rem;
    background-image: url(${profilePhoto});
    background-size: cover;
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
  
  @media screen and (max-width: 820px) {
    flex-direction: column;
    
    img.photo {
      margin: 0;
      margin-bottom: 1rem;
    }
    
    .actions {
      margin-top: 1rem;
      width: 100%;
      justify-content: center;
      align-items: center;
      
      .hey-button {
        padding: 0.5rem;
      }
    }
    
    .who {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      .role {
        text-align: center;
      }
    }
  }
`);

const UserInfo = () => {
  const profileData = useSelector((state) => state.user.profile);
  return (
    <Info profilePhoto={profileData.photo || profilePlaceholder} padding="wide">
      <div className="photo" />
      <div className="who">
        <div className="name">
          <div className="fullname">{profileData.fullName}</div>
          <span className="username">{`@${profileData.userName}`}</span>
        </div>
        <div className="role">{profileData.job}</div>
      </div>
      <div className="actions">
        <Link to={`/${profileData.userName}`}>
          <Button text="View Profile" icon="Eye" />
        </Link>
      </div>
    </Info>
  );
};

export default UserInfo;
