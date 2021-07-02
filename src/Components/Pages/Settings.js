import React from 'react';
import styled, { css } from 'styled-components';
import FormDescription from '../Generic/Forms/FormDescription';
import SettingsForm from './Dashboard/SettingsForm';
import Container from '../Layout/Container';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  flex-wrap: wrap;
  
  
  @media screen and (max-width: 1440px) {
    flex-direction: column;
  }
`);

const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <FormDescription>
          <h3>Settings</h3>
          Manage your Heyvisit.me experience.
        </FormDescription>
        <SettingsForm />

      </Wrapper>
    </Container>
  );
};

export default Settings;
