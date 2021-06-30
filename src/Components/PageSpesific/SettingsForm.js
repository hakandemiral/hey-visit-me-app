import React from 'react';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import FormBase from '../Generic/Forms/FormBase';
import TextInput from '../Generic/Inputs/TextInput';
import Checkbox from '../Generic/Inputs/Checkbox';
import ThemeSwitch from '../Generic/ThemeSwitch';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  h3 {
    width: 100%;
    color: ${theme.colors.heading};
    font ${theme.typography.body.regular16};
    margin-bottom: 1rem;
    
    &:not(:first-child) {
      margin-top: 4rem;
    }
    }
  
  .checkbox {
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .theme-switch {
    width: 10rem;
  }

  @media screen and (max-width: 576px) {
    padding: 1rem 1rem;
  }
`);

const SettingsForm = () => {
  const { register, watch, control } = useForm();

  console.log(watch());
  return (
    <FormBase>
      <Wrapper>

        <h3>Get notified about...</h3>
        <Controller
          name="importantInformations"
          control={control}
          render={({ field }) => (
            <Checkbox
              field={field}
              label="Important informations like news, announcements and updates."
              name="importantInformations"
            />
          )}
        />

        <Controller
          name="profileViews"
          control={control}
          render={({ field }) => (
            <Checkbox
              field={field}
              label="Profile Views"
              name="profileViews"
            />
          )}
        />

        <Controller
          name="businessCardViews"
          control={control}
          render={({ field }) => (
            <Checkbox
              field={field}
              label="Business card views"
              name="businessCardViews"
            />
          )}
        />

        <h3>Theme</h3>
        <ThemeSwitch />

      </Wrapper>
    </FormBase>
  );
};

export default SettingsForm;
