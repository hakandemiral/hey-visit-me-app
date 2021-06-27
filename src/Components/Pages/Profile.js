import React from 'react';
import styled, { css } from 'styled-components';
import FormDescription from '../Generic/Forms/FormDescription';
import Container from '../Layout/Container';
import ProfileSettings from '../PageSpesific/Profile/ProfileSettings';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  
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
    </Wrapper>
  </Container>
);

export default Profile;
