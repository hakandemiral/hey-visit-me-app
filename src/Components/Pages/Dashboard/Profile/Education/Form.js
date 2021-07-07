import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormBase from '../../../../Generic/Forms/FormBase';
import TextInput from '../../../../Generic/Inputs/TextInput';
import TextArea from '../../../../Generic/Inputs/TextArea';
import DateRange from '../../../../Generic/Inputs/DateRange';
import { updateEducation } from '../../../../../features/user/userSlice';

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

  @media screen and (max-width: 960px) {
    .text-input, .dropdown-input {
      width: 100%;
    }
  }
`);

const validationSchema = yup.object({
  school: yup.string().max(50),
  department: yup.string().max(34),
  degree: yup.string().max(20),
  description: yup.string().max(1000),
});

const Form = ({ id }) => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.user.educations.find((item) => item._id === id));

  const {
    register, watch, handleSubmit, control, formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      ...education,
      dateRange: {
        startMonth: education.startMonth,
        startYear: education.startYear,
        endMonth: education.endMonth,
        endYear: education.endYear,
        currentWorking: education.currentlyStudying,
      },
    },
  });

  const onSubmit = (data) => {
    const newData = {
      id,
      school: data.school,
      department: data.department,
      degree: data.degree,
      startMonth: data.dateRange.startMonth,
      startYear: data.dateRange.startYear,
      endMonth: data.dateRange.endMonth,
      endYear: data.dateRange.endYear,
      currentlyStudying: data.dateRange.currentWorking,
      description: data.description,
    };
    dispatch(updateEducation(newData));
    console.log(newData);
  };

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>

        <TextInput
          name="school"
          label="School"
          placeholder="Stanford University"
          hookForm={{ ...register('school') }}
          error={errors}
        />

        <TextInput
          name="department"
          label="What do/ did you study?"
          placeholder="Psycholoy"
          hookForm={{ ...register('department') }}
          error={errors}
        />

        <TextInput
          name="degree"
          label="Degree"
          placeholder="Master, PhD, etc."
          hookForm={{ ...register('degree') }}
          error={errors}
        />

        <Controller
          control={control}
          name="dateRange"
          render={({ field }) => (
            <DateRange
              fields={field}
              name="dateRange"
              checkboxLabel="I continue to study here"
            />
          )}
        />

        <TextArea
          name="description"
          label="Description"
          placeholder="Brief description about education, your grade, activities etc..."
          hookForm={{ ...register('description') }}
          error={errors}
        />

      </Wrapper>
    </FormBase>
  );
};

Form.propTypes = {
  id: propTypes.number.isRequired,
};

export default Form;
