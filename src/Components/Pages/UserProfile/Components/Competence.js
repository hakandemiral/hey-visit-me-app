import React from 'react';
import styled, { css } from 'styled-components';
import * as Icons from '../../../Icons';
import CompetenceLevel from './CompetenceLevel';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100%;
  padding: 3rem;
  background-color: ${theme.colors.paper};
  border-radius: 0.5rem ;
  filter: ${theme.filters.softShadow};
  
  .icon {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    background-color: ${theme.colors.brandMoreLight};
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
    
    svg {
      font-size: 1.5rem;
      color: ${theme.colors.brand};
    }
  }
  
  h3 {
    font: ${theme.typography.body.regular20};
    color: ${theme.colors.heading};
    display: flex;
    align-items: center;
    margin-bottom: 2.25rem;
    
    span {
      margin-left: 1rem;
      font: ${theme.typography.body.medium16};
      color: ${theme.colors.brand};
    }
  }
  
  ul {
    li {
      display: flex;
      align-items: center;
      font: ${theme.typography.body.regular16};
      color: ${theme.colors.bodyText};
      
      span {
        margin-right: 2rem;
      }


      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    padding: 1.5rem;
  }
`);

const Competence = () => {
  return (
    <Wrapper className="competence">
      <div className="icon">
        <Icons.Translate />
      </div>

      <h3>
        Language
        <span>· 2</span>
      </h3>

      <ul>
        <li>
          <span>Turkish</span>
          <CompetenceLevel denominator={7} message="Native" numerator={7} />
        </li>

        <li>
          <span>English</span>
          <CompetenceLevel denominator={7} message="B1" numerator={3} />
        </li>
      </ul>

    </Wrapper>
  );
};

export default Competence;
