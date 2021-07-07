import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import Paper from '../../../Layout/Paper';
import IconedButtons from '../../../Generic/Inputs/IconedButton';
import { TrendingUp, TrendingDown } from '../../../Icons';
import yandexMetricaLogo from '../../../../Images/Photos/metrica.svg';
import yandexMetricaWhiteLogo from '../../../../Images/Photos/metricaWhite.svg';

const ViewCount = styled(Paper)(({
  theme, isDark,
}) => css`
  display: flex;
  align-items: center;
  background-image: url(${isDark ? yandexMetricaWhiteLogo : yandexMetricaLogo});
  background-size: 70px;
  background-repeat: no-repeat;
  background-position: bottom 10px right 10px;
  
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

const ViewCounter = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <ViewCount isDark={isDark} padding="narrow">
      <Icon icon="Eye" />
      <div className="stats">
        <div className="title">Total business card views</div>
        <div className="count">
          <span className="big">1</span>
          <span className="small">from 0</span>
        </div>
      </div>
      <div className="ratio">
        <TrendingUp />
        <div className="percent">100%</div>
      </div>
    </ViewCount>
  );
};

export default ViewCounter;
