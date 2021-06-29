import React from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import FormBase from '../../Generic/Forms/FormBase';
import LanguagesInput from './CustomInputs/LanguagesInput';
import TagInput from '../../Generic/Inputs/TagInput';

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
  const { register } = useForm();

  return (
    <FormBase onSubmit={(e) => e.preventDefault()} onKeyDown={(e) => checkKeyDown(e)}>
      <Wrapper>

        <TagInput
          icon="BadgeCheck"
          label="Skills and Industry Knowledge"
          placeholder="Type a skill and press enter"
        />

        <TagInput
          icon="DesktopComputer"
          label="Tools & Technologies"
          placeholder="Type a skill and press enter"
        />

        <LanguagesInput />

      </Wrapper>
    </FormBase>
  );
};

export default Competencies;
