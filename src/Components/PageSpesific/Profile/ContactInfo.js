import React from 'react';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormBase from '../../Generic/Forms/FormBase';
import TextInput from '../../Generic/Inputs/TextInput';
import SocialAccountInput from './CustomInputs/SocialAccountInput';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .text-input, .dropdown-input {
    width: 45%;
    margin: 1rem;
  }
  
  h4 {
    margin: 2rem 0;
    color: ${theme.colors.heading};
    font: ${theme.typography.body.regular16};
  }

  @media screen and (max-width: 960px) {
    .text-input, .dropdown-input {
      width: 100%;
    }

    .social-account-input {

      .text-input, .dropdown-input {
        width: 45%;
        margin: 0.5rem;
      }
    }
  }
`);

const validationSchema = yup.object({
  phoneKind: yup.string(),
  phoneNumber: yup.string(),
  emailKind: yup.string(),
  emailAddress: yup.string().email(),
  websiteKind: yup.string(),
  websiteUrl: yup.string(),
  socialAccounts: yup.array().of(yup.object().shape({
    network: yup.string(),
    userName: yup.string(),
  })),
});

const ContactInfo = () => {
  const defaultValues = {
    socialAccounts: [
      { id: 0, network: 'Instagram', userName: '@hakan' },
      { id: 1, network: 'Instagram', userName: '@hakan' },
      { id: 2, network: 'Instagram', userName: '@hakan' },
    ],
  };

  const {
    register, watch, handleSubmit, control, formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <FormBase onSubmit={handleSubmit((e) => { console.log(e); })}>
      <Wrapper>

        <TextInput
          name="phoneKind"
          label="Phone Kind"
          description="What are you using this phone number for?"
          icon="QuestionMarkCircle"
          placeholder="Work, personal, etc..."
          hookForm={{ ...register('phoneKind') }}
          error={errors}
        />

        <TextInput
          name="phoneNumber"
          label="Phone Number"
          description="You can add your phone number."
          icon="Phone"
          placeholder="+1 555 555 55 55"
          hookForm={{ ...register('phoneNumber') }}
          error={errors}
        />

        <TextInput
          name="emailKind"
          label="Email Kind"
          description="What are you using this email address for?"
          icon="QuestionMarkCircle"
          placeholder="Work, personal, etc..."
          hookForm={{ ...register('emailKind') }}
          error={errors}
        />

        <TextInput
          name="emailAddress"
          label="Email Address"
          description="You can add your email address."
          icon="Mail"
          placeholder="bill@microsoft.com"
          hookForm={{ ...register('emailAddress') }}
          error={errors}
        />

        <TextInput
          name="websiteKind"
          label="Website Kind"
          description="What are you using this website for?"
          icon="QuestionMarkCircle"
          placeholder="Personal blog, portfolio, etc..."
          hookForm={{ ...register('websiteKind') }}
          error={errors}
        />

        <TextInput
          name="websiteUrl"
          label="Website URL"
          description="You can add your email address."
          icon="GlobeAlt"
          placeholder="https://hakandemiral.com.tr"
          hookForm={{ ...register('websiteUrl') }}
          error={errors}
        />

        <Controller
          control={control}
          name="socialAccounts"
          render={({ field }) => (
            <SocialAccountInput
              field={field}
            />
          )}
        />

      </Wrapper>
    </FormBase>
  );
};

export default ContactInfo;
