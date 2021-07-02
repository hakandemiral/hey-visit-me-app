import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div(({
  theme, numerator,
}) => css`
  display: flex;
  align-items: center;
  
  .level {
    width: 1rem;
    height: 2rem;
    background-color: ${theme.colors.brandDisabled};
    border-radius: 0.25rem;
    
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
    
    &:nth-child(-n+${numerator}) {
      background-color: ${theme.colors.green};
    }
  }
  
  .message {
    border-radius: 0.5rem;
    background-color: ${theme.colors.paper};
    display: grid;
    place-items: center;
    padding: 0.5rem 1rem;
    font: ${theme.typography.body.regular16};
    filter: ${theme.filters.softShadow};
    position: relative;
    margin-left: 2rem;
    color: ${theme.colors.bodyText};
    
    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      position: absolute;
      left: -0.5rem;
      transform: rotate(45deg);
      background-color: ${theme.colors.paper};
    }
  }
  
  @media screen and (max-width: 550px) {
    .level {
      width: 0.5rem;
      &:not(:last-child) {
        margin-right: 0.25rem;
      }
    }
    
    .message {
      padding: 0.5rem 0.75rem;
      margin-left: 0.5rem;
    }
  }
`);

const CompetenceLevel = ({ numerator, denominator, message }) => {
  return (
    <Wrapper numerator={numerator}>
      {/* eslint-disable-next-line prefer-spread */}
      {Array.apply(null, Array(denominator)).map((x) => (
        // eslint-disable-next-line react/jsx-key
        <div className="level" />
      ))}
      <div className="message">{message}</div>
    </Wrapper>
  );
};

CompetenceLevel.propTypes = {
  numerator: propTypes.number.isRequired,
  denominator: propTypes.number.isRequired,
  message: propTypes.string.isRequired,
};

export default CompetenceLevel;
