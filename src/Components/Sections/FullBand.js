import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Generic/Inputs/Button';

const Band = styled.div(({
  theme,
}) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background-color: ${theme.colors.brandMoreLight};
  text-align: center;
`);

const Title = styled.h3(({
  theme,
}) => css`
  font: ${theme.typography.heading.medium32};
  background: linear-gradient(-90deg, #D1576A, #BC9AEC, #DEBABE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`);

const Text = styled.p(({
  theme,
}) => css`
  font: ${theme.typography.body.regular16};
  color: ${theme.colors.bodyText};
  margin-bottom: 4rem;
  
  &+button {
    margin-bottom: 4rem;
  }
`);

const FullBand = () => (
  <Band className="full-band">
    <Title>Create profile in minutes, not hours.</Title>
    <Text>
      Create your profile for free in minutes, send it to people!
    </Text>
    <Link to="/sign-up">
      <Button text="Create Profile" variant="primary" />
    </Link>
  </Band>
);

export default FullBand;
