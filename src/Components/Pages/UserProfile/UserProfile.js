import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Experiences from './Components/Experiences';
import Competence from './Components/Competence';
import FullBand from '../../Sections/FullBand';
import Footer from '../../Sections/Footer';
import Contact from './Components/Contact';
import * as Icons from '../../Icons';
import Educations from './Components/Educations';
import LoadingScreen from '../Dashboard/LoadingScreen';
import NotFound404 from '../NotFound404';

const Wrapper = styled.div(({
  theme, profilePhoto,
}) => css`
  .container {
    max-width: 1440px;
    margin: auto;
    padding: 0 2rem;
  }
  
  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40rem;
    margin: auto;
    
    .profile-photo {
      border-radius: 50%;
      margin-top: 8rem;
      margin-bottom: 2rem;
      width: 15rem;
      height: 15rem;
      background-image: url(${profilePhoto});
      background-size: cover;
    }
    
    .name {
      font: ${theme.typography.heading.medium32};
      color: ${theme.colors.brand};
    }
    
    .job {
      font: ${theme.typography.heading.regular20};
      color: ${theme.colors.bodyText};
      margin-bottom: 2rem;
    }

    .where {
      width: 60%;
      display: flex;
      justify-content: space-evenly;
      margin: 1rem auto;
      
      .item {
        display: flex;
        align-items: center;
        font: ${theme.typography.body.regular16};
        color: ${theme.colors.bodyText};
        
        svg {
          color: ${theme.colors.borderDivider};
          font-size: 1.5rem;
          margin-right: 1rem;
        }
      }
      
    }
    
    .bio {
      margin: 1rem auto 4rem auto;
      color: ${theme.colors.bodyText};
      font: ${theme.typography.body.regular16};
      text-align: justify;
      padding: 0 2rem;
    }
    
    .socials {
      width: 60%;
      display: flex;
      justify-content: space-evenly;
      margin: 1rem auto;
      
      .item {
        color: ${theme.colors.borderDivider};
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover span {
          opacity: 1;
        }
        
        svg {
          font-size: 1.5rem;
        }
        
        span {
          opacity: 0;
          color: ${theme.colors.bodyText};
          background-color: ${theme.colors.paper};
          bottom: 1.8rem;
          position: absolute;
          padding: 0.05rem 0.25rem;
          border: 0.8px solid ${theme.colors.brand};
          border-radius: 0.25rem;
          transition: 150ms opacity;
        }
      }
    }
    

  }
  
  .time-line {
    margin-top: 6rem;
  }
  
  h4 {
    margin-top: 6rem;
    font: ${theme.typography.body.regular20};
    color: ${theme.colors.bodyText};
  }
  
  .competence {
    margin-top: 2rem;
  }
  
  .full-band {
    margin-top: 5rem;
  }

  @media screen and (max-width: 550px) {
    .container {
      padding: 0 0.75rem;
    }
  }
`);

const UserProfile = () => {
  const [user, setUser] = useState();
  const [status, setStatus] = useState('loading');
  const { userName } = useParams();

  useEffect(async () => {
    try {
      const res = await axios.get(`http://hey-visit-me.herokuapp.com/public/getUser/${userName}`);
      if (res.status === 200) {
        setUser(res.data);
        setStatus('success');
      }
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 404) {
        setStatus('notFound');
      }
      if (error.response.status === 500) {
        setStatus('failed');
      }
    }
  }, []);

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  if (status === 'notFound') {
    return <NotFound404 />;
  }

  if (status === 'success') {
    return (
      <Wrapper profilePhoto={user.profile.photo}>
        <div className="head">

          <div className="profile-photo" />

          <div className="name">
            {user.profile.fullName}
          </div>

          <div className="job">
            {user.profile.job}
          </div>

          <div className="where">
            <div className="item">
              <Icons.Location />
              {user.profile.city}
            </div>
            <div className="item">
              <Icons.Office />
              {user.profile.company}
            </div>
          </div>

          <div className="socials">
            {user.contactInfos.socialAccounts.map((item) => (
              <div key={item._id} className="item">
                {Icons[item.network] && Icons[item.network]()}
                <span className="userName">{item.userName}</span>
              </div>
            ))}
          </div>

          <div className="bio">
            {user.profile.bio}
          </div>
        </div>

        <div className="container">
          <Contact
            birthday={user.profile.birthDate}
            phone={user.contactInfos.phoneValue}
            mail={user.contactInfos.emailValue}
            website={user.contactInfos.websiteValue}
          />

          {user.experiences.length !== 0 && (
            <Experiences
              data={user.experiences}
            />
          )}

          {user.educations.length !== 0 && (
            <Educations
              data={user.educations}
            />
          )}

          <h4>Competencies</h4>
          {user.competencies.languages.length !== 0 && (
            <Competence
              title="Languages"
              data={user.competencies.languages}
              icon="Translate"
            />
          )}

          {user.competencies.skills.length !== 0 && (
            <Competence
              title="Skills & Industry Knowledge"
              data={user.competencies.skills}
              icon="BadgeCheck"
            />
          )}

          {user.competencies.tools.length !== 0 && (
            <Competence
              title="Tools & Technologies"
              data={user.competencies.tools}
              icon="DesktopComputer"
            />
          )}
        </div>
        <FullBand />
        <Footer />
      </Wrapper>
    );
  }
};

export default UserProfile;
