import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import FormBase from '../../../Generic/Forms/FormBase';
import TextInput from '../../../Generic/Inputs/TextInput';
import SocialAccountInput from './CustomInputs/SocialAccountInput';
import { setContactInfos } from '../../../../features/user/userSlice';

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
  emailKind: yup.string().max(25),
  emailValue: yup.string().max(150),
  phoneKind: yup.string().max(35),
  phoneValue: yup.string().max(25),
  websiteKind: yup.string().max(25),
  websiteValue: yup.string().max(128),
  socialAccounts: yup.array(),
});

const ContactInfos = () => {
  const dispatch = useDispatch();
  const {
    contactInfos: contactData,
    initialLoading,
  } = useSelector((state) => state.user);

  const {
    register, watch, handleSubmit, control, formState: { errors }, reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: contactData,
  });

  const onSubmit = (data) => {
    dispatch(setContactInfos(data));
  };

  useEffect(() => {
    if (contactData) {
      reset(contactData);
    }
  }, [contactData]);

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <TextInput
          autoComplate="off"
          name="phoneKind"
          label="Phone Kind"
          description="What are you using this phone number for?"
          icon="QuestionMarkCircle"
          placeholder="Work, personal, etc..."
          hookForm={{ ...register('phoneKind') }}
          error={errors}
        />

        <TextInput
          autoComplate="tel"
          name="phoneValue"
          label="Phone Number"
          description="You can add your phone number."
          icon="Phone"
          placeholder="+1 555 555 55 55"
          hookForm={{ ...register('phoneValue') }}
          error={errors}
        />

        <TextInput
          autoComplate="off"
          name="emailKind"
          label="Email Kind"
          description="What are you using this email address for?"
          icon="QuestionMarkCircle"
          placeholder="Work, personal, etc..."
          hookForm={{ ...register('emailKind') }}
          error={errors}
        />

        <TextInput
          autoComplate="email"
          name="emailValue"
          label="Email Address"
          description="You can add your email address."
          icon="Mail"
          placeholder="bill@microsoft.com"
          hookForm={{ ...register('emailValue') }}
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
          autoComplate="site"
          name="websiteValue"
          label="Website URL"
          description="You can add your email address."
          icon="GlobeAlt"
          placeholder="https://hakandemiral.com.tr"
          hookForm={{ ...register('websiteValue') }}
          error={errors}
        />

        <h4>Social Accounts</h4>
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

export default ContactInfos;
