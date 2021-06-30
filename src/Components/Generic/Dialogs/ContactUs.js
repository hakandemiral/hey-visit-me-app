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
  }
  
  .text-input, .dropdown-input, .text-area {
    width: 26rem;
  }
  
  & > :not(:last-child) {
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

const ContactUs = () => {
  const defaultValues = {
    email: 'wcnxxx@gmail.com',
    subject: 'Active',
    text: 'lorem lroem lorem',
  };

  const {
    register, control, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  console.log(errors);

  return (
    <DialogBase onSubmit={handleSubmit((e) => {})}>
      <Wrapper>

        <h4>Contact Us</h4>

        <TextInput
          name="email"
          icon="AtSymbol"
          label="E-mail"
          placeholder="name@example.com"
          hookForm={{ ...register('email') }}
          error={errors}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <DropdownInput
              name="subject"
              field={field}
              placeholder="Select one"
              icon="Support"
              label="What do you need help with?"
              options={[
                { title: 'Active' },
                { title: 'Passive' },
              ]}
              searchable={false}
              error={errors}
            />
          )}
        />

        <TextArea
          label="How can help you?"
          placeholder="Please describe exactly"
          hookForm={{ ...register('text') }}
          name="text"
          error={errors}
        />

      </Wrapper>
    </DialogBase>
  );
};

export default ContactUs;
