import React from 'react';
import styled, { css } from 'styled-components';
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
    <Title>Create business card in minutes, not hours.</Title>
    <Text>
      Speed is the most necessary element to transforming unique
      ideas roaming in the
      <br />
      creative minds into actions.
    </Text>
    <Button text="Create Business Card" variant="primary" />
  </Band>
);

export default FullBand;
