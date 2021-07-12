import React from 'react';
import styled, { css } from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import FormBase from '../../../Generic/Forms/FormBase';
import LanguagesInput from './CustomInputs/LanguagesInput';
import TagInput from '../../../Generic/Inputs/TagInput';
import { setCompetencies } from '../../../../features/user/userSlice';

const Wrapper = styled.div(() => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .dropdown-input, .tag-input {
    width: 45%;
    margin: 1rem;
  }
  
  @media screen and (max-width: 960px) {
    .tag-input, .dropdown-input {
      width: 100%;
    }
  }
`);

const checkKeyDown = (e) => {
  if (e.code === 'Enter') e.preventDefault();
  if (e.code === 'NumpadEnter') e.preventDefault();
};

const Competencies = () => {
  const dispatch = useDispatch();
  const competencies = useSelector((state) => state.user.competencies);

  const languageMapper = () => {
    if (typeof competencies.languages === typeof []) {
      return competencies.languages.map((item) => {
        return { id: item.id, language: item.language, level: item.level };
      });
    }

    return [];
  };

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      ...competencies,
      languages: languageMapper(),
    },
  });

  const onSubmit = (data) => {
    dispatch(setCompetencies(data));
  };

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => checkKeyDown(e)}>
      <Wrapper>

        <Controller
          control={control}
          name="skills"
          render={({ field }) => (
            <TagInput
              icon="BadgeCheck"
              label="Skills and Industry Knowledge"
              placeholder="Type a skill and press enter"
              fields={field}
            />
          )}
        />

        <Controller
          control={control}
          name="tools"
          render={({ field }) => (
            <TagInput
              icon="DesktopComputer"
              label="Tools & Technologies"
              placeholder="Type a skill and press enter"
              fields={field}
            />
          )}
        />

        <Controller
          control={control}
          name="languages"
          render={({ field }) => (
            <LanguagesInput field={field} />
          )}
        />

      </Wrapper>
    </FormBase>
  );
};

export default Competencies;
