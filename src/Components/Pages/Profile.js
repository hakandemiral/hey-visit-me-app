import React from 'react';
import styled, { css } from 'styled-components';
import FormDescription from '../Generic/Forms/FormDescription';
import Container from '../Layout/Container';
import ProfileSettings from '../PageSpesific/Profile/ProfileSettings';
import ContactInfo from '../PageSpesific/Profile/ContactInfo';
import Experience from '../PageSpesific/Profile/Experience';
import Education from '../PageSpesific/Profile/Education';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  flex-wrap: wrap;
  
  .divider {
    height: 8rem;
    width: 100%;
  }
  
  @media screen and (max-width: 1440px) {
    flex-direction: column;
  }
`);

const Profile = () => (
  <Container>
    <Wrapper>

      <FormDescription>
        <h3>Profile</h3>
        This information will be displayed publicly.
        Introduce yourself in a simple way and be careful what you share.
      </FormDescription>
      <ProfileSettings />

      <div className="divider" />

      <FormDescription>
        <h3>Contact İnformation</h3>
        This information helps people contact you.
      </FormDescription>
      <ContactInfo />

      {/*<div className="divider" />*/}

      {/*<FormDescription>*/}
      {/*  <h3>Experience</h3>*/}
      {/*  The information here tells people about your professional experience.*/}
      {/*</FormDescription>*/}
      {/*<Experience />*/}

      {/*<div className="divider" />*/}

      {/*<FormDescription>*/}
      {/*  <h3>Education</h3>*/}
      {/*  The information here tells people about your education.*/}
      {/*</FormDescription>*/}
      {/*<Education />*/}

    </Wrapper>
  </Container>
);

export default Profile;
