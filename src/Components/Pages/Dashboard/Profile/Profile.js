// Cores
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Container from '../../../Layout/Container';
import FormDescription from '../../../Generic/Forms/FormDescription';
import ProfileSettings from './ProfileSettings';
import ContactInfo from './ContactInfo';
import Experience from './Experience';
import Education from './Education';
import Competencies from './Competencies';

import { getFullProfile } from '../../../../features/user/userSlice';

// Styling
const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  .divider {
    height: 8rem;
    width: 100%;
  }
  
  @media screen and (max-width: 1440px) {
    flex-direction: column;
  }
`);

const Profile = () => {
  return (
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

        {/*<div className="divider" />*/}

        {/*<FormDescription>*/}
        {/*  <h3>Competencies</h3>*/}
        {/*  The information here tells people about your competencies.*/}
        {/*</FormDescription>*/}
        {/*<Competencies />*/}

      </Wrapper>
    </Container>
  );
};

export default Profile;
