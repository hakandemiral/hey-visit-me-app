import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import FormBase from '../../../../Generic/Forms/FormBase';
import TextInput from '../../../../Generic/Inputs/TextInput';
import TextArea from '../../../../Generic/Inputs/TextArea';
import DateRange from '../../../../Generic/Inputs/DateRange';
import { updateExperience } from '../../../../../features/user/userSlice';

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
  company: yup.string().max(50),
  currentlyWorking: yup.bool(),
  description: yup.string().max(1000),
  employmentType: yup.string(),
  job: yup.string().max(35),
  location: yup.string().max(35),
});

const Form = ({ id }) => {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.user.experiences.find((item) => item._id === id));
  const {
    register, watch, handleSubmit, control, formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      ...experience,
      dateRange: {
        startMonth: experience.startMonth,
        startYear: experience.startYear,
        endMonth: experience.endMonth,
        endYear: experience.endYear,
        currentWorking: experience.currentlyWorking,
      },
    },
  });

  const onSubmit = (data) => {
    const newData = {
      id,
      job: data.job,
      company: data.company,
      employmentType: data.employmentType,
      location: data.location,
      startMonth: data.dateRange.startMonth,
      startYear: data.dateRange.startYear,
      endMonth: data.dateRange.endMonth,
      endYear: data.dateRange.endYear,
      currentlyWorking: data.dateRange.currentWorking,
      description: data.description,
    };
    dispatch(updateExperience(newData));
  };

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <TextInput
          name="job"
          label="Job Title"
          placeholder="UI Designer"
          hookForm={{ ...register('job') }}
          error={errors}
        />

        <TextInput
          name="company"
          label="Company"
          placeholder="Stripe"
          hookForm={{ ...register('company') }}
          error={errors}
        />

        <TextInput
          name="employmentType"
          label="Employment Type"
          placeholder="Remote, freelance, etc."
          hookForm={{ ...register('employmentType') }}
          error={errors}
        />

        <TextInput
          name="location"
          label="Location"
          placeholder="Ireland"
          hookForm={{ ...register('location') }}
          error={errors}
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
          name="description"
          label="Description"
          placeholder="Brief description about experience, your role etc... "
          hookForm={{ ...register('description') }}
          error={errors}
        />

      </Wrapper>
    </FormBase>
  );
};

Form.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Form;
