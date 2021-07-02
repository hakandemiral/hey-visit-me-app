import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import * as Icons from '../../../Icons';

const Wrapper = styled.div(({
  theme,
}) => css`
  width: 100%;
  .title {
    font: ${theme.typography.body.regular20};
    color: ${theme.colors.headingText};
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    
    .time {
      font: ${theme.typography.body.medium16};
      color: ${theme.colors.brand};
      margin-left: 1rem;
    }
  }
  
  .item {
    margin-bottom: 1rem;
    .top {
      display: flex;
      align-items: center;

      .dot {
        min-width: 3.5rem;
        min-height: 3.5rem;
        background-color: ${theme.colors.brandMoreLight};
        border-radius: 50%;
        margin-right: 2rem;
      }
      
      .position {
        display: flex;
        align-items: center;
        font: ${theme.typography.body.medium16};
        color: ${theme.colors.heading};
        
        .time {
          font: ${theme.typography.body.medium16};
          color: ${theme.colors.brand};
          margin-left: 1rem;
        }
      }
    }
    
    .bottom {
      margin-top: 1rem;
      margin-left: 1.5rem;
      padding-left: 3.8rem;
      border-left: 2px solid ${theme.colors.borderDivider};
      
      .bottom-item {
        display: flex;
        align-items: center;
        color: ${theme.colors.bodyText};
        font: ${theme.typography.body.regular16};
        
        svg {
          color: ${theme.colors.borderDivider};
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
        
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    }
  }
  
  @media screen and 
`);

const TimeLine = () => {
  return (
    <Wrapper className="time-line">
      <div className="title">
        Experience
        <span className="time">11 years 2 months</span>
      </div>

      <div className="item">
        <div className="top">
          <div className="dot" />
          <div className="position">
            Self-employed, Web Developer
            <div className="time">4 years 11 months</div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-item">
            <Icons.Office />
            Sanatkardan E Commerce Inc.
          </div>
          <div className="bottom-item">
            <Icons.Calendar />
            June 2016 - Now
          </div>
          <div className="bottom-item">
            <Icons.Location />
            Ankara, Turkey
          </div>
        </div>
      </div>

    </Wrapper>
  );
};

export default TimeLine;
