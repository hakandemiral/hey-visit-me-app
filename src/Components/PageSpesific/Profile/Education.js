import React from 'react';
import styled, { css } from 'styled-components';
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
`);

const Education = () => {
  return (
    <FormBase onSubmit={(e) => { e.preventDefault(); }}>
      <Wrapper>

        <TextInput
          name="school"
          label="School"
          placeholder="Stanford University"
        />

        <TextInput
          name="bolum"
          label="What do/ did you study?"
          placeholder="Psycholoy"
        />

        <TextInput
          name="degree"
          label="Degree"
          placeholder="Master, PhD, etc."
        />

        <DateRange
          name="education"
          checkboxLabel="I am currently working"
        />

        <TextArea
          label="Description"
          placeholder="Brief description about education, your grade, activities etc..."
        />

      </Wrapper>
    </FormBase>
  );
};

export default Education;