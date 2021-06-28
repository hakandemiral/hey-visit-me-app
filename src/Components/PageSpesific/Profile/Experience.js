import React from 'react';
import styled, { css } from 'styled-components';
import FormBase from '../../Generic/Forms/FormBase';
import TextInput from '../../Generic/Inputs/TextInput';
import TextArea from '../../Generic/Inputs/TextArea';
import Checkbox from '../../Generic/Inputs/Checkbox';

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

const Experience = () => {
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

        <TextInput
          name="Start Month"
          label="Start Month"
          placeholder="July"
        />

        <TextInput
          name="Start Year"
          label="Start Year"
          placeholder="2006"
        />

        <Checkbox label="Test test test" name="asd"/>

        <TextArea
          label="Description"
          placeholder="Brief description about experience, your role etc... "
        />

      </Wrapper>
    </FormBase>
  );
};

export default Experience;
