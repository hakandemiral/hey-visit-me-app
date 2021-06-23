import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paper from '../../Layout/Paper';
import IconedButtons from '../../Generic/Inputs/IconedButton';
import { TrendingUp, TrendingDown } from '../../Icons';

const ViewCount = styled(Paper)(({
  theme,
}) => css`
  display: flex;
  align-items: center;
  
  .stats {
    .title {
      font: ${theme.typography.body.regular16};
      color: ${theme.colors.secondaryText};
      margin-bottom: 0.25rem;
    }
    .count {
      display: flex;
      align-items: center;
      .big {
        font: ${theme.typography.body.medium20};
        color: ${theme.colors.brand};
        margin-right: 0.25rem;
      }
      .small {
        font: ${theme.typography.body.medium16};
        color: ${theme.colors.bodyText};
      }
    }
  }
  
  .ratio {
    display: flex;
    align-items: center;
    color: ${theme.colors.green};
    align-self: flex-start;
    margin-left: 1rem;
    
    svg {
      font-size: 1.5rem;
      margin-right: 0.25rem;
    }
    
    .percent {
      font: ${theme.typography.body.medium16};
    }
  }
`);

const Icon = styled(IconedButtons)(({
  theme,
}) => css`
  filter: none;
  background-color: ${theme.colors.brandMoreLight};
  color: ${theme.colors.brand};
  margin-right: 0.5rem;
  cursor: default;
`);

const ViewCounter = () => (
  <ViewCount padding="narrow">
    <Icon icon="Eye" />
    <div className="stats">
      <div className="title">Total business card views</div>
      <div className="count">
        <span className="big">1.248</span>
        <span className="small">from 1.040</span>
      </div>
    </div>
    <div className="ratio">
      <TrendingUp />
      <div className="percent">20%</div>
    </div>
  </ViewCount>
);

export default ViewCounter;
