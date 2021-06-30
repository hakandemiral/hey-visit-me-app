import React from 'react';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DialogBase from './Base/DialogBase';
import TextInput from '../Inputs/TextInput';
import DropdownInput from '../Inputs/DropdownInput';
import TextArea from '../Inputs/TextArea';

const Wrapper = styled.div(({
  theme,
}) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h4 {
    color: ${theme.colors.heading};
    font: ${theme.typography.body.regular20};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${theme.colors.bodyText};
    font: ${theme.typography.body.regular16};
    max-width: 26rem;
  }
  
  .text-input, .dropdown-input, .text-area {
    width: 26rem;
  }
  
  & > :not(:last-child, :first-child) {
    margin-bottom: 4rem;
  }
  
  @media screen and (max-width: 630px) {
    .text-input, .dropdown-input, .text-area {
      width: 95%;
    }

    & > :not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }

  @media screen and (max-width: 320px) {
    .text-input, .dropdown-input, .text-area {
      width: 95%;
    }

    & > :not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`);

const validationSchema = yup.object({
  email: yup.string(),
  subject: yup.string(),
  text: yup.number(),
});

const GiveFeedback = () => {
  const defaultValues = {
    email: 'wcnxxx@gmail.com',
    text: 'lorem lroem lorem',
  };

  const {
    register, control, watch, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });
  
  return (
    <DialogBase onSubmit={handleSubmit((e) => {})}>
      <Wrapper>

        <h4>Contact Us</h4>
        <p>
          Your feedback is important for better experince and
          optimization. So please share your feedback.
        </p>

        <TextInput
          name="email"
          icon="AtSymbol"
          label="E-mail"
          placeholder="name@example.com"
          hookForm={{ ...register('email') }}
          error={errors}
        />

        <TextArea
          label="Feedback"
          placeholder="What do you think about Heyvisit.me?"
          hookForm={{ ...register('text') }}
          name="text"
          error={errors}
        />

      </Wrapper>
    </DialogBase>
  );
};

export default GiveFeedback;
