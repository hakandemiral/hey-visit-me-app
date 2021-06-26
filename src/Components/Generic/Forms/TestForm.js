import React from 'react';
import { useForm } from 'react-hook-form';
import FormBase from './FormBase';
import Container from '../../Layout/Container';

export default () => {
  const a = useForm();

  return (
    <Container>
      <FormBase>
        asd
      </FormBase>
    </Container>
  );
};
