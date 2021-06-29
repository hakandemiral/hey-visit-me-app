import React from 'react';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormBase from '../../Generic/Forms/FormBase';
import TextInput from '../../Generic/Inputs/TextInput';
import TextArea from '../../Generic/Inputs/TextArea';
import DateRange from '../../Generic/Inputs/DateRange';

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

  .text-area {
    width: 100%;
    margin: 1rem;
  }

  .social-accound-input {
    margin: -25px 0;
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
  }
`);

const validationSchema = yup.object({
  dateRange: yup.object(),
});

const Experience = () => {
  const defaultValues = {
    dateRange: {
      currentWorking: true,
      startMonth: 'August',
      startYear: '2021',
      endMonth: 'May',
      endYear: '2048',
    },
  };

  const {
    register, watch, handleSubmit, control, formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <FormBase onSubmit={(e) => { e.preventDefault(); }}>
      <Wrapper>

        <TextInput
          name="job-title"
          label="Job Title"
          placeholder="UI Designer"
        />

        <TextInput
          name="Company"
          label="Company"
          placeholder="Stripe"
        />

        <TextInput
          name="Employment Type"
          label="Employment Type"
          placeholder="Remote, freelance, etc."
        />

        <TextInput
          name="Location"
          label="Location"
          placeholder="Ireland"
        />

        <Controller
          name="dateRange"
          control={control}
          render={({ field }) => (
            <DateRange
              fields={field}
              checkboxLabel="I am currently working here"
              name="dateRange"
            />
          )}
        />

        <TextArea
          label="Description"
          placeholder="Brief description about experience, your role etc... "
        />

      </Wrapper>
    </FormBase>
  );
};

export default Experience;
